'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
]);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    //$routeProvider.otherwise({ redirectTo: '/view1' });

    $routeProvider.when('/', {
        templateUrl: 'ng-app/view/home.html',
        controller: 'homeController',
        caseInsensitiveMatch: true,
    });
}]);