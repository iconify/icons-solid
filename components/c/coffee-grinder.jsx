import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwmg95bvh.css';
import '../../css/q/qukb6_vib.css';
import '../../css/j/jcy_bcbae.css';
import '../../css/w/w3-hwac-b.css';
import '../../css/r/rt3rfzb_r.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/zn_g_fumq.css';
import '../../css/y/y25y8cbxq.css';
import '../../css/k/klc80m0sn.css';
import '../../css/a/audc7ybdv.css';
import '../../css/v/vpag4u_7i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qwmg95bvh"/><path class="qukb6_vib"/><path class="jcy_bcbae"/><path class="w3-hwac-b"/><path class="rt3rfzb_r"/><g class="brzn_0bpr"><path class="zn_g_fumq"/><path class="y25y8cbxq"/><path class="klc80m0sn"/><path class="audc7ybdv"/><path class="vpag4u_7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:coffee-grinder"} {...others} />);
}

export default Component;
