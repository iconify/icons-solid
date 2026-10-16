import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6bewdbru.css';
import '../../css/l/lm0-7bbwm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m6bewdbru"/><path class="lm0-7bbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-constraint-20-bold"} {...others} />);
}

export default Component;
