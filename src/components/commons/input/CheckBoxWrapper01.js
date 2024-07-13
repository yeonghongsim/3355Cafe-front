import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HideInput = styled.input`
    display: none;
`;
const ChkBoxImg = styled.img`
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    &:hover {
        cursor: pointer;
    }
`;

export default function CheckBoxWrapper01({
    id,
    allCheckBox,
    handleAllCheckBox
}) {
    return (
        <Wrapper>
            {
                allCheckBox ?
                    <ChkBoxImg
                        src="/image/checkbox-checked.svg"
                        draggable="false"
                        onClick={() => handleAllCheckBox()}
                    ></ChkBoxImg> :
                    <ChkBoxImg
                        src="/image/checkbox-unchecked.svg"
                        draggable="false"
                        onClick={() => handleAllCheckBox()}
                    ></ChkBoxImg>
            }
            <HideInput
                id={id}
                name={id}
                checked={allCheckBox}
                onChange={() => handleAllCheckBox()}
            ></HideInput>
        </Wrapper>
    )
}