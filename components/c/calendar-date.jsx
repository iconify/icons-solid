import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d7bpunbie.css';
import '../../css/f/f05uqsblk.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="d7bpunbie"/><path class="f05uqsblk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:calendar-date"} {...others} />);
}

export default Component;
