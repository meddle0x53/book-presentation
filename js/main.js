(function () {
  'use strict';

  Handlebars.registerHelper('step', function (data) {
    var ret = '';
    for (var key in data) {
      ret = ret + ' data-' + key + '="' + data[key] + '"';
    }
    return ret;
  });

  function appendSlides (data) {

    var steps = data;
    var htmltemplate = $('#step-template').html();
    var htmltempl = Handlebars.compile(htmltemplate);
    steps.forEach(function (step, index) {
      var templ = htmltempl;

      $.ajax({
        url: '/book-presentation/steps/' + step.uri,
        success: function (data) {
          $('.steps').append(templ(
            {
              file: data, data: step.data,
              class: step.class, id: step.id
            }
          ));
        },
        async: false
      });
    });
  };

  document.addEventListener("keyup", function (event) {
    if (event.keyCode === 65) {
      // 'a'
      impressApi.goto('title');
    }
    if (event.keyCode === 83) {
      // 's'
      impressApi.goto('why-and-why-not-1');
    }
    if (event.keyCode === 68) {
      // 'd'
      impressApi.goto('publish-1');
    }
    if (event.keyCode === 70) {
      // 'f'
      impressApi.goto('beginning-1');
    }
    if (event.keyCode === 71) {
      // 'g'
      impressApi.goto('writing-1');
    }
    if (event.keyCode === 72) {
      // 'h'
      impressApi.goto('the-code-1');
    }
    if (event.keyCode === 74) {
      // 'j'
      impressApi.goto('ending-1');
    }
    if (event.keyCode === 75) {
      // 'k'
      impressApi.goto('coda-1');
    }

    if (event.keyCode === 66) {
      // 'b'
      window.history.back()
    }
  }, false);

  window.Presentation = {
    appendSlides: appendSlides
  };

})();
