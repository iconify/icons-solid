import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h38x8ubia.css';
import '../../css/m/mxeocob-h.css';
import '../../css/e/ennax5mbg.css';
import '../../css/r/rs-6labub.css';
import '../../css/r/r-lvmrq4v.css';
import '../../css/e/e-ml9mrbh.css';
import '../../css/j/j8gcoutyn.css';
import '../../css/u/u_ndmactf.css';
import '../../css/r/rmkt3uemw.css';
import '../../css/p/pw7f7jbjr.css';
import '../../css/q/ql29bp0iv.css';
import '../../css/a/ah9m2x1se.css';
import '../../css/j/jx2pqccow.css';
import '../../css/m/mo3vkvkns.css';
import '../../css/s/sgx-7_csi.css';
import '../../css/k/k1tgjj71n.css';
import '../../css/e/enckjcckn.css';
import '../../css/l/lf_4gibtj.css';
import '../../css/z/z86zgr5nv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h38x8ubia wm-shadow"/><path class="mxeocob-h wm-k"/><path class="ennax5mbg wm-k"/><path class="rs-6labub wm-k"/><path class="r-lvmrq4v wm-k"/><path class="e-ml9mrbh wm-k"/><path class="j8gcoutyn wm-shine"/><path class="u_ndmactf wm-k"/><path class="rmkt3uemw wm-k"/><path class="pw7f7jbjr wm-k"/><path class="ql29bp0iv wm-k"/><path class="ah9m2x1se wm-k"/><path class="jx2pqccow wm-k"/><path class="mo3vkvkns wm-s"/><path class="sgx-7_csi wm-s"/><path class="k1tgjj71n wm-s"/><path class="enckjcckn wm-s"/><path class="lf_4gibtj wm-s"/><path class="wm-shine z86zgr5nv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:bluetooth-off"} {...others} />);
}

export default Component;
