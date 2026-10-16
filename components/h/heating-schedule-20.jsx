import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjzgm6b2a.css';
import '../../css/k/ktpspx8sw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yjzgm6b2a"/><path class="ktpspx8sw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-schedule-20"} {...others} />);
}

export default Component;
