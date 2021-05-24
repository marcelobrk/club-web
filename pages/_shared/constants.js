export const constants = {
    socketUrl: 'https://marcelo-os.herokuapp.com',
    // socketUrl: 'https://ew-socket-server.herokuapp.com',
    socketNamespaces: {
        room: 'room',
        lobby: 'lobby'
    },
    peerConfig: Object.values({
        id: undefined,
        config: {
            // host: 'ew-peerjs-server.herokuapp.com',
            // secure: true,
            // path: '/'
            port: 9000,
            host: 'https://marcelo-os.herokuapp.com',
            path: '/'
        }
    }),
    pages: {
        lobby: '/pages/lobby',
        login: '/pages/login',
    },
    events: {
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',

        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'lobbyUpdated',
        UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

        SPEAK_REQUEST: 'speakRequest',
        SPEAK_ANSWER: 'speakAnswer'
    },
    firebaseConfig: {
        apiKey: "AIzaSyB56Fh_BsSPqCg1uXJsjlzIW0C76uVy47U",
        authDomain: "teste-360db.firebaseapp.com",
        projectId: "teste-360db",
        storageBucket: "teste-360db.appspot.com",
        messagingSenderId: "427272264738",
        appId: "1:427272264738:web:11ebefa626df0a74123e7b",
        measurementId: "G-1CTP23569Q"
      },
    storageKey: 'jsexpert:storage:user'
}
