import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-cat-app-f92b0.firebaseapp.com",
  projectId: "react-cat-app-f92b0",
  storageBucket: "react-cat-app-f92b0.appspot.com",
  messagingSenderId: "1019718735405",
  appId: "1:1019718735405:web:0ed6dc858842cd960c0aa4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()