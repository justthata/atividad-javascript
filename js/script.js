function checkString() {
    if (/\d/.test(document.getElementById('nome').value)) {
        alert("Insira seu nome corretamente")
    }
    if (/\d/.test(document.getElementById('sobrenome').value)) {
        alert("Insira seu sobrenome corretamente")
    }
    if (/\d/.test(document.getElementById('usuario').value)) {
        alert("Insira seu usuário corretamente, sem números")
    }
}

function checkInfo() {
    if (document.getElementById('salvarInfo').checked) {
        alert("A escolha foi realizada com sucesso!")
    }
}

function checkPayment() {
    var paymentMethodDebit = document.getElementById('debito')
    var paymentMethodCredit = document.getElementById('credito')

    if (paymentMethodDebit.checked || paymentMethodCredit.checked) {
        var element = document.getElementById('sessaoCartao')
        element.classList.remove('d-none')
    }

    if (!(paymentMethodCredit.checked) & !(paymentMethodDebit.checked)) {
        var element = document.getElementById('sessaoCartao')
        element.classList.add('d-none')
    }
}

function checkPaymentMethod() {
    payments = document.getElementsByName('pagamento')
    payments.forEach((payment) => {
        if (payment.checked) {
            document.getElementById('tipoPagamento').placeholder = payment.value
        }
    })

}