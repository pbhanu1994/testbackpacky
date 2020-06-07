import firebase from "firebase";
import environment from "./constants/environment";

export const config = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  projectId: environment.projectId,
};

console.info(`Connected to database: ${environment.databaseURL}`);

firebase.initializeApp(config);

export const firestore = firebase.firestore();
