Feature('login');

Scenario('logging in', ({ I }) => {
    I.amOnPage('https://etalente.co.za/main');
    I.fillField('Username', 'email@example.com');       //put ur correct username
    I.fillField('Password', 'Test1234');                //put ur correct password
    I.click('Login');
    I.dontSee('Invalid credentials provided');
});