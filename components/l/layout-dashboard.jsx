import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/te8v4cb2k.css';
import '../../css/u/uqmzx3bae.css';
import '../../css/a/aen5kw_dl.css';
import '../../css/m/mqi0usbue.css';
import '../../css/b/buur3eb1q.css';
import '../../css/o/oaejd4bfr.css';
import '../../css/c/cqxepd_lp.css';
import '../../css/k/ktgcmccib.css';
import '../../css/i/ium8pbx8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="te8v4cb2k wm-shadow"/><path class="uqmzx3bae"/><path class="aen5kw_dl"/><path class="mqi0usbue"/><path class="buur3eb1q"/><path class="oaejd4bfr"/><path class="cqxepd_lp"/><path class="ktgcmccib"/><path class="ium8pbx8r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:layout-dashboard"} {...others} />);
}

export default Component;
