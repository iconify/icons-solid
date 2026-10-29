import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mc09_q5oi.css';
import '../../css/j/j1q041bll.css';
import '../../css/f/fy7v02hzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mc09_q5oi"/><path class="j1q041bll wm-shadow"/><path class="fy7v02hzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-left-engrave"} {...others} />);
}

export default Component;
