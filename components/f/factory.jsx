import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/phsdogbvk.css';
import '../../css/q/qbw5mjbxg.css';
import '../../css/r/rsii2nt2d.css';
import '../../css/m/mj_3h0blc.css';
import '../../css/n/nmoojjb8v.css';
import '../../css/k/ky99-8bnf.css';
import '../../css/u/utl7hy68r.css';
import '../../css/w/wamxqxbcc.css';
import '../../css/w/wa4nowbvc.css';
import '../../css/u/u3psd_bvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="phsdogbvk wm-shadow"/><path class="qbw5mjbxg wm-shadow"/><path class="rsii2nt2d"/><path class="mj_3h0blc"/><path class="nmoojjb8v"/><path class="ky99-8bnf"/><path class="utl7hy68r wm-shine"/><path class="wamxqxbcc wm-shine"/><path class="wa4nowbvc"/><path class="u3psd_bvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:factory"} {...others} />);
}

export default Component;
