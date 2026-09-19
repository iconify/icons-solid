import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we4oo-_ip.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="we4oo-_ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:square"} {...others} />);
}

export default Component;
