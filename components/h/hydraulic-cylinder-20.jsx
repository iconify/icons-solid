import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeuljtb4o.css';
import '../../css/r/rh2_wobnx.css';
import '../../css/w/w6_7avbsy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zeuljtb4o"/><path class="rh2_wobnx"/><path class="w6_7avbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-cylinder-20"} {...others} />);
}

export default Component;
