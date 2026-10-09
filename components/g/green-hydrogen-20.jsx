import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igszs0yyx.css';
import '../../css/r/r_cx60bme.css';
import '../../css/d/dvybr6c4h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="igszs0yyx"/><path class="r_cx60bme"/><path class="dvybr6c4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-hydrogen-20"} {...others} />);
}

export default Component;
