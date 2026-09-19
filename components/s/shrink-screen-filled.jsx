import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uev-y9bxq.css';
import '../../css/h/hurcj9b3v.css';
import '../../css/v/v758r-tyc.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="uev-y9bxq"/><path class="hurcj9b3v"/><path class="v758r-tyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shrink-screen-filled"} {...others} />);
}

export default Component;
