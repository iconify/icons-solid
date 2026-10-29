import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2x04p8eg.css';
import '../../css/p/p7k_89obw.css';
import '../../css/w/wddi-ks2t.css';
import '../../css/z/zy9q-xbtj.css';
import '../../css/v/v5s0w7buj.css';
import '../../css/q/qvkkk30ue.css';
import '../../css/x/xao9uzbmv.css';
import '../../css/e/e2zo_bpzf.css';
import '../../css/i/iqujy8b0u.css';
import '../../css/n/naetv55my.css';
import '../../css/i/i3flzybwt.css';
import '../../css/l/lztx9gbjl.css';
import '../../css/k/k-jbdvbsa.css';
import '../../css/b/bdn--s9vk.css';
import '../../css/g/g5k41jbpb.css';
import '../../css/z/zbyjjuyuw.css';
import '../../css/h/h9_85lj7l.css';
import '../../css/d/d_7re8vrm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u2x04p8eg wm-shadow"/><path class="p7k_89obw wm-shadow"/><path class="wddi-ks2t wm-k"/><path class="wm-k zy9q-xbtj"/><path class="v5s0w7buj wm-k"/><path class="qvkkk30ue wm-k"/><path class="wm-k xao9uzbmv"/><path class="e2zo_bpzf wm-k"/><path class="iqujy8b0u wm-k"/><path class="naetv55my wm-k"/><path class="i3flzybwt wm-k"/><path class="lztx9gbjl wm-k"/><path class="k-jbdvbsa wm-s"/><path class="bdn--s9vk wm-s"/><path class="g5k41jbpb wm-s"/><path class="wm-s zbyjjuyuw"/><path class="h9_85lj7l wm-s"/><path class="d_7re8vrm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:phone-forwarded"} {...others} />);
}

export default Component;
