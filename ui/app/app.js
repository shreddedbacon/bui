angular.module('bui', [
    'ui.ace',
    'ui.router',
    'master',
    'dashboard',
    'login',
    'deployment',
    'deploymentManifest',
    'deploymentIndex',
    'deployments',
    'stemcells',
    'releases'
]).
config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/components/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'LoginController'
            })
            .state('deployments', {
                url: '/deployments/',
                templateUrl: 'app/components/deployments/deployments.html',
                controller: 'DeploymentsController'
            })
            .state('deployment', {
                url: '^/deployments/:name',
                templateUrl: 'app/components/deployment/deployment.html',
                controller: 'DeploymentController'
            })
            .state('deployment.index', {
                url: '/index',
                templateUrl: 'app/components/deployment/index.html',
                controller: 'DeploymentIndexController'
            })
            .state('deployment.manifest', {
                url: '/manifest',
                templateUrl: 'app/components/deployment/manifest.html',
                controller: 'DeploymentManifestController'
            })
            .state('stemcells', {
                url: '/stemcells/',
                templateUrl: 'app/components/stemcells/stemcells.html',
                controller: 'StemcellsController'
            })
            .state('releases', {
                url: '/releases/',
                templateUrl: 'app/components/releases/releases.html',
                controller: 'ReleasesController'
            })
    }
]);