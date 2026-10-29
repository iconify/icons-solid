import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_2pood_w.css';
import '../../css/g/gvt2468kn.css';
import '../../css/l/ltkw3sb_p.css';
import '../../css/t/tcx_mybeg.css';
import '../../css/w/woy1gbblx.css';
import '../../css/r/rqwkcm7po.css';
import '../../css/e/er4gmkb_b.css';
import '../../css/f/fhd2biz3l.css';
import '../../css/j/ji28d4bds.css';
import '../../css/j/jfvg_obni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q_2pood_w wm-shadow"/><path class="gvt2468kn wm-shadow"/><path class="ltkw3sb_p"/><path class="tcx_mybeg"/><path class="woy1gbblx"/><path class="rqwkcm7po"/><path class="er4gmkb_b"/><path class="fhd2biz3l wm-shine"/><path class="ji28d4bds wm-shine"/><path class="jfvg_obni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sliders"} {...others} />);
}

export default Component;
