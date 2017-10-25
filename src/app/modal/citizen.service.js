(function() {
    'use strict';

    angular.module('app')
        .factory('citizenService', [
            '$q', '$http',
            navService
        ]);

    function navService($q, $http) {
        var service = {};
        service.list = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/citizen/list',
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.login = function(user) {
            return $http({
                method: 'GET',
                url: 'http://localhost:8090/citizen/auth?email='+user.email+'&password='+user.password,
                headers: {
                    'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA='
                }
            });
        }

        service.create = function(user) {
            var req = {
                method: 'POST',
                url: 'http://localhost:8090/citizen/create',
                headers: {
                 'Authorization': 'dmFsbGV5Zm9yZ2U6MTY3NDA=',
                  'Content-Type': 'application/json'
                },
                data: user
               }
               
            return $http(req);
        }

        return service;
    }

})();