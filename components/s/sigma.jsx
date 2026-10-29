import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kw29arr.css';
import '../../css/a/asqrf3b2d.css';
import '../../css/c/c4fh57bsp.css';
import '../../css/q/q12i969-c.css';
import '../../css/s/sqgdc_byr.css';
import '../../css/i/i-xclbceo.css';
import '../../css/b/bdhxaubti.css';
import '../../css/m/mcpddtb-j.css';
import '../../css/i/iekjokbgz.css';
import '../../css/k/k5ggogjve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d2kw29arr wm-shadow"/><path class="asqrf3b2d wm-shadow"/><path class="c4fh57bsp"/><path class="q12i969-c"/><path class="sqgdc_byr"/><path class="i-xclbceo"/><path class="bdhxaubti"/><path class="mcpddtb-j wm-shine"/><path class="iekjokbgz wm-shine"/><path class="k5ggogjve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sigma"} {...others} />);
}

export default Component;
