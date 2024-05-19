import axios from 'axios';

const stripe = Stripe('pk_test_51P5I63EiBz0LyJF2RtHyNQ0nb5cgaHH0aTNXZYh2F4Z823Zp2GFmpA6JgtsvT7PLbwZ0zBOuIcGKjJ8yX4GRrevC00tbjFRSj2')

export const bookTour = async tourId => {
    try {
      // 1) Get checkout session from API
      const session = await axios(
        `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
      );
      console.log(session);
  
      // 2) Create checkout form + chanre credit card
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
    } catch (err) {
      console.log(err);
      showAlert('error', err);
    }
  };
  