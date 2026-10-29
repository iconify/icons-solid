import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nitsftnfw.css';
import '../../css/c/cbdqcfz6n.css';
import '../../css/c/c_7grsb_r.css';
import '../../css/f/fzlcxvbvr.css';
import '../../css/w/w2wlmuu_g.css';
import '../../css/b/bty-jxzwn.css';
import '../../css/l/l4wvnbcmb.css';
import '../../css/k/kw9ytv2dz.css';
import '../../css/v/v12f22qte.css';
import '../../css/a/abxhn3gjm.css';
import '../../css/z/zvyx06bzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nitsftnfw wm-shadow"/><path class="cbdqcfz6n wm-shadow"/><path class="c_7grsb_r"/><path class="fzlcxvbvr"/><path class="w2wlmuu_g"/><path class="bty-jxzwn"/><path class="l4wvnbcmb wm-shine"/><path class="kw9ytv2dz wm-shine"/><path class="v12f22qte"/><path class="abxhn3gjm"/><path class="zvyx06bzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:webhook"} {...others} />);
}

export default Component;
