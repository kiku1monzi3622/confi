// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";  require.config({
    shim: {
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      bootstrap: {
        deps: ["jquery"],
        exports: "jquery"
      },
      handlebars: {
        exports: "Handlebars"
      }
    },
    paths: {
      jquery: "../bower_components/jquery/jquery",
      jquery_form: "../bower_components/jquery-form/jquery.form",
      backbone: "../bower_components/backbone-amd/backbone",
      underscore: "../bower_components/underscore-amd/underscore",
      bootstrap: "vendor/bootstrap",
      text: "../bower_components/requirejs-text/text",
      handlebars: "../bower_components/handlebars.js/handlebars"
    }
  });

  require(["backbone", "app/router/router"], function(Backbone, AppRouter) {
    var router;

    router = new AppRouter();
    return Backbone.history.start();
  });

}).call(this);
