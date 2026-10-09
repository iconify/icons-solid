import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmgp-hp4m.css';
import '../../css/y/ylee2db2d.css';
import '../../css/a/ay1aj8o0x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rmgp-hp4m"/><path class="ylee2db2d"/><path class="ay1aj8o0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-meter-20-bold"} {...others} />);
}

export default Component;
