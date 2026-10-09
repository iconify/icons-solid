import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbi0yub_m.css';
import '../../css/m/msu5rib1x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pbi0yub_m"/><path class="msu5rib1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-off-20"} {...others} />);
}

export default Component;
