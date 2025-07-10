function sendMail(){
    let parms = {
    name : document.getElementById("form_name").value,
    email : document.getElementById("form_email").value,
    subject : document.getElementById("form_subject").value,
    message : document.getElementById("form_message").value,
    
    }
    
    emailjs.send("service_0cxg3a6","template_7tdc0o8",parms).then(alert("Email is Sent !!!!"));
}