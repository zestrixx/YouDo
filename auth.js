const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', e=>{
    e.preventDefault()
    const email=signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    auth.createUserWithEmailAndPassword(email, password).then(()=>{
        const modal =document.querySelector('#modal-signup')
        signupForm.querySelector('.error').innerHTML=''
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    })
    .catch(err=>{
        signupForm.querySelector('.error').innerHTML=err.message
    })
})