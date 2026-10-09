import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_7is9beq.css';
import '../../css/s/sk8h-pxpn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q_7is9beq"/><path class="sk8h-pxpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-left-20"} {...others} />);
}

export default Component;
