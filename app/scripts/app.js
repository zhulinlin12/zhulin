'use strict';

/**
 * @ngdoc overview
 * @name zhulinlinApp
 * @description
 * # zhulinlinApp
 *
 * Main module of the application.
 */
angular
  .module('zhulinlinApp', []).controller("jgr",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news1/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(e){})  }]).controller("jgr2",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news2/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(e){})

   
  }]).controller("jgr3",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news-img1/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(e){})

   
  }]).controller("jgr4",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news-img2/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   },function(e){})

   
  }]).directive("autoplay",[function(){
    return {
      restrict:"ECMA",
      template:'<div class="dl"><li  ng-repeat="arr in data"  >{{arr.title |odd }}</li></div>',
      scope:{data:"=jgr"},
      link:function(s,e,a){

        
      }

    }
  }]).directive("tup",[function(){
    return {
      restrict:"ECMA",
      template:'<div><div ng-repeat="h in data" ><img ng-src="{{h.img}}" alt=""></div></div>',
      scope:{data:"=jgr"},
      link:function(s,e,a){

        
      }

    }
  }]).filter('odd',function(){
 
	    		return function(arrA){
	    			if(arrA.length>=18){
	    				return arrA.substr(0,18)+'...'
	    			}else{
	    				return arrA
	    			}
	    		}
	    		
	    		
	    	})
