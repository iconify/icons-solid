import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2uqr_weh.css';
import '../../css/e/e6hy7lfrb.css';
import '../../css/u/uqxwqmbyc.css';
import '../../css/a/a6efscclt.css';
import '../../css/n/nsb19lbrs.css';
import '../../css/e/e0wutdu6g.css';
import '../../css/s/sz5bowvsy.css';
import '../../css/v/vms30ju8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j2uqr_weh wm-shadow"/><path class="e6hy7lfrb"/><path class="uqxwqmbyc"/><path class="a6efscclt"/><path class="nsb19lbrs"/><path class="e0wutdu6g wm-s"/><path class="sz5bowvsy wm-s"/><path class="vms30ju8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:red-envelope"} {...others} />);
}

export default Component;
