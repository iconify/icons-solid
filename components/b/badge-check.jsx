import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1-ql8but.css';
import '../../css/g/gtv40ib3j.css';
import '../../css/n/nlqhu2byj.css';
import '../../css/b/borfpeb5p.css';
import '../../css/a/acjbm_b_c.css';
import '../../css/d/dhznq1bwu.css';
import '../../css/n/nk5r0ac3m.css';
import '../../css/g/g14ubtbfm.css';
import '../../css/p/ph_obcc3i.css';
import '../../css/a/a_3ruobpn.css';
import '../../css/f/f_pnh_bla.css';
import '../../css/o/oyxzf__9k.css';
import '../../css/v/vh3y-aclx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b1-ql8but wm-shadow"/><path class="gtv40ib3j wm-k"/><path class="nlqhu2byj wm-k"/><path class="borfpeb5p wm-k"/><path class="acjbm_b_c wm-k"/><path class="dhznq1bwu wm-k"/><path class="nk5r0ac3m wm-shine"/><path class="g14ubtbfm wm-a"/><path class="ph_obcc3i wm-a"/><path class="a_3ruobpn wm-a"/><path class="f_pnh_bla wm-a"/><path class="oyxzf__9k wm-a"/><path class="vh3y-aclx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:badge-check"} {...others} />);
}

export default Component;
