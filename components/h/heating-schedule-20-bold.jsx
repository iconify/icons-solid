import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4zy9ybio.css';
import '../../css/g/gw-flvwxj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m4zy9ybio"/><path class="gw-flvwxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-schedule-20-bold"} {...others} />);
}

export default Component;
