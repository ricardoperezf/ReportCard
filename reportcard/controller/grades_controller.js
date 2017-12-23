angular.module('ReportCard', [])
    .controller('GradesController', function ($scope, $http) {
        $scope.grades = [];
        $scope.newGrade = {};
        $http.get("http://192.168.1.16:5000/grades")
            .then(function (datos) {
                    console.log(datos);
                    $scope.grades = datos.data;
                },
                function (error) {
                    console.log(error);
                });
        $scope.addPost = function () {
            $http.post("http://192.168.1.16:5000/grades", {
                    course: $scope.newGrade.course,
                    grade: $scope.newGrade.grade
                })
                .then(function (data, status, headers, config) {
                    console.log(data);
                    $scope.grades.push($scope.newGrade);
                    $scope.newGrade = {};
                    alert("Data inserted");

                }, function (error, status, headers, config) {
                    console.log(error);
                });
        };
    });
