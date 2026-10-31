import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/c/cx56nio2v.css';
import '../../css/x/xt_2axjnb.css';
import '../../css/e/e5o_92bzh.css';
import '../../css/u/uexr9hoky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="cx56nio2v"/><path class="xt_2axjnb"/><path class="e5o_92bzh"/><path class="uexr9hoky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-plus"} {...others} />);
}

export default Component;
