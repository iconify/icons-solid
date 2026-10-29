import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/k/k_vp9-55s.css';
import '../../css/f/fdf08cccu.css';
import '../../css/t/tfcdfubkl.css';
import '../../css/m/mgb_mabsw.css';
import '../../css/l/lv_pg508n.css';
import '../../css/j/j-fuusw2j.css';
import '../../css/s/sq1nf1b0o.css';
import '../../css/l/l4lsjlb0o.css';
import '../../css/o/oj4_bgdln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="k_vp9-55s wm-k"/><path class="fdf08cccu wm-shine"/><path class="tfcdfubkl wm-k"/><path class="mgb_mabsw wm-k"/><path class="lv_pg508n wm-k"/><path class="j-fuusw2j wm-a"/><path class="sq1nf1b0o wm-a"/><path class="l4lsjlb0o wm-a"/><path class="oj4_bgdln wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-dot"} {...others} />);
}

export default Component;
