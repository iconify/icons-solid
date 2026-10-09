import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpdrb_b_d.css';
import '../../css/v/vqx3s2bml.css';
import '../../css/j/jmxwfobcl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qpdrb_b_d"/><path class="vqx3s2bml"/><path class="jmxwfobcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-star-20"} {...others} />);
}

export default Component;
