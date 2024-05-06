// Define AngularJS module
var app = angular.module('myApp', []);

// Define header directive
app.directive('headerComponent', function() {
  return {
    restrict: 'E',
    templateUrl: 'header.html'
  };
});

// Define footer directive
app.directive('footerComponent', function() {
  return {
    restrict: 'E',
    templateUrl: 'footer.html'
  };
});
