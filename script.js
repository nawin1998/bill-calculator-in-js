function val(){
    let a=String(document.getElementById("demo1").value);
    let b=String(document.getElementById("demo2").value);
    let c=String(document.getElementById("demo3").value);

    //name
    if(a==""){
        alert("Name required");
        a.focus();
        return false;
    }
    //id
    if(b==""){
        alert("id required");
        a.focus();
        return false;
    }
    if(b.length<3){
        alert("Your ID is too short!");
        b.focus();
        return false;
    }
    if(b.length>6){
        alert("Your ID is too long!");
        b.focus();
        return false;
    }
    //total used units
    if(c<=100){   
    let demo3=c*2;
    document.getElementById("demo4").innerHTML=("RS-"+demo3);
    }
    //c=100-200
    if(c>100 && c<=200){
    let demo3=c*4;
    document.getElementById("demo4").innerHTML=("RS-"+demo3);
    }
    //c=200-300
    if(c>200 && c<=300){
        let demo3=c*6;
    document.getElementById("demo4").innerHTML=("RS-"+demo3);
    }
    //c=300-400
    if(c>300 && c<=400){
        let demo3=c*8;
    document.getElementById("demo4").innerHTML=("RS-"+demo3);
    }
}