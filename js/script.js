document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario();
    });

    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;

        if (nombre === "" || apellido === "" || email === "" || telefono === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        var telefonoRegex = /^[0-9]+$/;

        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido (solo números).");
            return;
        }

        limpiarFormulario();
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        alert("¡Información enviada!");
    }
});
