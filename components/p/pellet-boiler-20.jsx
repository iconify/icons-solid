import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxjtvuboi.css';
import '../../css/p/pzrdwd7sw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mxjtvuboi"/><path class="pzrdwd7sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pellet-boiler-20"} {...others} />);
}

export default Component;
