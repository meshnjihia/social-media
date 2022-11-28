import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: 'String',
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: 'String',
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: 'String',
            required: true,
            max: 50,
            unique: true,
        },
        Password: {
            type: 'String',
            required: true,
            min: 5,
        },
        picturePath: {
            type: 'String',
            default:'',
        },
        friends: {
            type: 'array',
            default:'',
        },
        location: String,
        occupation: String,
        viewedprofile: Number,
        impressions: Number,
    
    },
    {timestamps: true}
);

const User = mongoose.model('User', UserSchema);
export default User;