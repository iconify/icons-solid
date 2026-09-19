import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx3vdt36c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vx3vdt36c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:billed-cap"} {...others} />);
}

export default Component;
