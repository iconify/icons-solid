import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/s/s7rmr2r2d.css';
import '../../css/l/ljix7zblu.css';
import '../../css/s/s2qc8_bwh.css';
import '../../css/q/q0-x06fsd.css';
import '../../css/g/gddg18qqu.css';
import '../../css/b/bn93spbhn.css';
import '../../css/q/qv4ogoj9v.css';
import '../../css/h/h3anofbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="s7rmr2r2d wm-k"/><path class="ljix7zblu wm-a"/><path class="s2qc8_bwh wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="q0-x06fsd wm-k"/><path class="gddg18qqu wm-a"/><path class="bn93spbhn wm-shadow"/><path class="qv4ogoj9v wm-shine"/><path class="h3anofbkh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:umbrella"} {...others} />);
}

export default Component;
