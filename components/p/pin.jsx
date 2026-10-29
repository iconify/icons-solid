import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2a6e0v6h.css';
import '../../css/s/s6vvmmn0k.css';
import '../../css/y/ysa7c-bvy.css';
import '../../css/r/rtrj2jbyg.css';
import '../../css/r/rb32ly7ky.css';
import '../../css/l/lj37ay7sv.css';
import '../../css/w/wiz_edcbw.css';
import '../../css/o/ofjznsvhg.css';
import '../../css/l/lm89e68vi.css';
import '../../css/a/a4bntmb_k.css';
import '../../css/f/fp1oo_bbq.css';
import '../../css/n/nv98xjkqi.css';
import '../../css/c/c1ntm_lgn.css';
import '../../css/z/zloteywvj.css';
import '../../css/v/vu3gx5bvx.css';
import '../../css/j/jra24bc8q.css';
import '../../css/z/z0vmnx0mx.css';
import '../../css/h/hzu4jxmtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c2a6e0v6h wm-shadow"/><path class="s6vvmmn0k wm-shadow"/><path class="wm-a ysa7c-bvy"/><path class="rtrj2jbyg wm-a"/><path class="rb32ly7ky wm-a"/><path class="lj37ay7sv wm-a"/><path class="wiz_edcbw wm-a"/><path class="ofjznsvhg wm-a"/><path class="lm89e68vi wm-a"/><path class="a4bntmb_k wm-a"/><path class="fp1oo_bbq wm-k"/><path class="nv98xjkqi wm-k"/><path class="c1ntm_lgn wm-k"/><path class="wm-k zloteywvj"/><path class="vu3gx5bvx wm-k"/><path class="jra24bc8q wm-shine"/><path class="wm-shine z0vmnx0mx"/><path class="hzu4jxmtv wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:pin"} {...others} />);
}

export default Component;
