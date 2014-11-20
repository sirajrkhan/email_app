'use strict';

/**
 * @ngdoc function
 * @name emailAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the emailAppApp
 */
angular.module('emailAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
