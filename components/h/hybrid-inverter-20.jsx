import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi5qd16vh.css';
import '../../css/v/v7zpq2cvm.css';
import '../../css/o/o76juu94h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hi5qd16vh"/><path class="v7zpq2cvm"/><path class="o76juu94h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hybrid-inverter-20"} {...others} />);
}

export default Component;
