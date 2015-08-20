'use strict';
angular.module('main')
.controller('LoginCtrl', function ($scope, $state) {

  $scope.doLogin = function() {
    $state.go('/');
  };

});
