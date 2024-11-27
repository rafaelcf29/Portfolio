document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();
    
    alert("Obrigado pela sua mensagem!");
    document.getElementById("form-contato").reset();
});
