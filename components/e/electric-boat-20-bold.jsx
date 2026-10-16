import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx_o-7mra.css';
import '../../css/x/xonpjubig.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hx_o-7mra"/><path class="xonpjubig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boat-20-bold"} {...others} />);
}

export default Component;
