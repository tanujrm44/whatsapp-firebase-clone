import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC4lOIovDcI33yK5T4PQIvRJ3sWe--KVPo",
  authDomain: "whatsapp-clone-af2de.firebaseapp.com",
  projectId: "whatsapp-clone-af2de",
  storageBucket: "whatsapp-clone-af2de.appspot.com",
  messagingSenderId: "299673585147",
  appId: "1:299673585147:web:734cbe16f537b3d38eb75e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
