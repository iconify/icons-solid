import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wty5_-bzz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wty5_-bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:martyr-memorial"} {...others} />);
}

export default Component;
