import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5wmwdblu.css';
import '../../css/k/kvqjz7b_z.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r5wmwdblu"/><path class="kvqjz7b_z"/><path class="hayl1lfmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-minus-20-bold"} {...others} />);
}

export default Component;
