import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in4ro2qrm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="in4ro2qrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:echo-ripples"} {...others} />);
}

export default Component;
