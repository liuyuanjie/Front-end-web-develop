/**
 * Created by liu on 2015/1/12.
 */
function test()
{
    //object.getNameFunc();
    //console.log(object.printNameFunc());
    //object.name="uu111";
    //object.printNameFunc();
    //print();
}

var name = "The Window";
var object = {
    name :"My Object",
    getNameFunc:function() {
        this.name='kaka';
    },
    /*printNameFunc:function(){
        return (function(a){
            return a.name;
        })(this);
    }*/
    printNameFunc:function(){
        this.name='fun';
        console.log(this.name);
        return function(obj){
            obj.name='fun_-_1';
            console.log(obj.name);
            console.log(this.name);
        }(this);
    }
　};
object.printNameFunc();
console.log('_________________________________');

function ctrip(){

    ////this.name='this';
    //(function plane(){
    //    //name="third";
    //      console.log(name+ '  plane');
    //   })();
    ////plane();
    //var name="second";
    //console.log(name+'log');
    console.log(name+'log');
    var name=0;
   }

 ctrip();
 console.log(name);

//function print(){
//    console.log(name);
//    name='333';
//    console.log(name);
//}
/*var object1 = {
    name : "second",
    ctrip:function()
    {
        *//*this.name = "one";
        function plane() {
        name = "third";
            console.log(this.name);
        }

        plane();*//*
        console.log("dd"=="dd");
        console.log(1==true);
        var q;
        console.log(q==null);
        console.log(q==undefined);
        console.log(' '==false);
        console.log(' 1'==false);
    }
};
object1.ctrip();*/
//(function ctrip()
//{
//    /*this.name = "one";
//     function plane() {
//     name = "third";
//     console.log(this.name);
//     }
//
//     plane();*/
//    console.log("dd"=="dd");
//    console.log(1==true);
//    var q;
//    console.log(q==null);
//    console.log(q==undefined);
//    console.log(' '==false);
//    console.log(' 1'==false);
//})();
//ctrip();
console.log(name);