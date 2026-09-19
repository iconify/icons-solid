import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izdoa1bjm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="izdoa1bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:banana-bunch"} {...others} />);
}

export default Component;
