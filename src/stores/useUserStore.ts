import { getIsLogin, getUserId } from 'utils/localStorage';
import { create } from 'zustand';

interface UserState {
    isLogin: boolean | null;
    userId: string | null;
    loginUser: ({ userId }: { userId: string }) => void;
    logoutUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
    isLogin: getIsLogin(),
    userId: getUserId(),
    loginUser: ({ userId }) => {
        set({
            userId,
            isLogin: true,
        });
    },
    logoutUser: () =>
        set({
            userId: null,
            isLogin: false,
        }),
}));

export default useUserStore;
