import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvhip5cnc.css';
import '../../css/y/y35w4ccky.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvhip5cnc"/><path class="y35w4ccky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-inverter-20"} {...others} />);
}

export default Component;
