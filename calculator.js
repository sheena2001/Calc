function calc(number){
    document.getElementById("num").value += number;

}

function clr(){
    document.getElementById("num").value= "";
}

function display(){
    var x= document.getElementById("num").value;
    var result= eval(x);
    document.getElementById("num").value = result ;

}