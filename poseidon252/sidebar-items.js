initSidebarItems({"constant":[["ARITY","Maximum arity supported for trees."]],"mod":[["merkle_lvl_hash","Reference implementation for the Poseidon Merkle hash function Poseidon hash implementation"],["merkle_proof","Reference implementation for the gadget that builds a merkle opening proof"],["sponge","Reference implementation for the Poseidon Sponge hash function"]],"struct":[["PoseidonAnnotation","The annotation for the Notes tree is a storagescalar and a cardinality"],["PoseidonBranch","The `Poseidon` structure will accept a number of inputs equal to the arity."],["PoseidonLevel","Represents a Merkle-Tree Level inside of a `PoseidonBranch`. It stores the leaves as `Scalar` and the offset which represents the position on the level where the hash of the previous `PoseidonLevel` is stored in."],["StorageScalar","This struct is a Wrapper type over the bls12-381 `Scalar` which has implemented inside the logic to allows `Kelvin` Merkle Trees understand how to store `Scalar`s inside of their leaves."]]});