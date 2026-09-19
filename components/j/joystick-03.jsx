import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hdqsq0bfi.css';
import '../../css/r/rmrac4bds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hdqsq0bfi"/><path class="rmrac4bds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:joystick-03"} {...others} />);
}

export default Component;
