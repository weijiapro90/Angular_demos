/**
 * Created by weijiaPro on 2017/6/18.
 */
var FormDemo = angular.module('FormDemo', []);

FormDemo.controller('FormCtrl',['$scope', function($scope){
    $scope.userInfo = {
        email: 'default@gmail.com',
        password: '12345678',
        autoLogin: true
    };

    $scope.getFormData = function () {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: 'new@gmail.com',
            password: 'newpwd',
            autoLogin: false
        }
    };

    $scope.resetForm = function () {
        $scope.userInfo = {
            email: '',
            password: '',
            autoLogin: true
        }
    }
}]);