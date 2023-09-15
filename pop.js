$=function (id){

    return document.getElementById(id);

}

var show=function(id){
    let text;
    let person=prompt("Enter name: ");
    text="I Love you "+ person;
    $(id).style.display='block';
    return document.getElementById(id).innerHTML=text;
}
var hide=function(id){
    $(id).style.display='none';
    // return document.getElementById(id);

}
