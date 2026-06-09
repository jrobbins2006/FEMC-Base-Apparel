const emailField = document.getElementById('email')
const errorIcon = document.getElementById('error-icon')
const errorMessage = document.getElementById('error-message')
function submitEmail (event) {
  event.preventDefault()
  let emailAddress = emailField.value
  let validEmailAddress = emailField.validity.valid
  if (!validEmailAddress) {
    errorIcon.style.display = 'block'
    errorMessage.style.display = 'block'
  } else {
    errorIcon.style.display = 'none'
    errorMessage.style.display = 'none'
  }
}
