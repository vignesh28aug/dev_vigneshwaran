function validate(){
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var address=document.getElementById("txt").value;
    var male=document.getElementById("male").value;
    var female=document.getElementById("female").value;

    // name

    if(allLetter(name))
    {
        if(ValidateEmail(email)){
            if(phone(mobile)){
                if(gender(male,female)){
                    if(alphanumeric(address)){
                        alert("Sucessfully Submitted")
                    }
                }    
            }    
        }
    }

    function allLetter(name)
    { 
    var letters = /^[A-Za-z]+$/;
    if(name.match(letters))
    {
    return true;
    }
    else
    {
        document.getElementById("name1").innerHTML='Username must have alphabet characters only';
    // alert('Username must have alphabet characters only');
    return false;
    }
    }

    //email

    function ValidateEmail(email)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
    return true;
    }
    else
    {
        document.getElementById("email1").innerHTML="You have entered an invalid email address!"
    return false;
    }
    }

    //mobile
    function phone(mobile){
    if(mobile != "" && mobile.length <= 10){
        return true;
        
    }
    else{
        document.getElementById("mobile1").innerHTML="Incorrect mobile Number";
        return false;
    }
    }

    //gender

    function gender(male,female){
        if(male != "" || female != ""){
            return true;
            
        }
        else{
            document.getElementById("gender")="Please select your gender";
            return false;
        }
    }


    //address

    function alphanumeric(address)
    { 
    var letters = /^[0-9a-zA-Z]+$/;
    if(address.match(letters))
    {
    return true;
    }
    else
    {
        document.getElementById("add")="User address must have alphanumeric characters only";
    return false;
    }
    }
    return false
    
}