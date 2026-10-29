import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utkwtdbjd.css';
import '../../css/m/mfxg32pia.css';
import '../../css/t/t-ftlznmk.css';
import '../../css/q/qd9eukoaa.css';
import '../../css/v/vyg81zjii.css';
import '../../css/j/j14ox626e.css';
import '../../css/q/qafkk0siq.css';
import '../../css/x/xd-mcybhy.css';
import '../../css/z/zjiwbfb7u.css';
import '../../css/f/fb_n0p_kf.css';
import '../../css/k/k_huh1ugp.css';
import '../../css/z/ze3w6dqil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utkwtdbjd wm-shadow"/><path class="mfxg32pia wm-a"/><path class="t-ftlznmk wm-a"/><path class="qd9eukoaa wm-a"/><path class="vyg81zjii wm-a"/><path class="j14ox626e wm-a"/><path class="qafkk0siq wm-k"/><path class="wm-k xd-mcybhy"/><path class="wm-k zjiwbfb7u"/><path class="fb_n0p_kf wm-k"/><path class="k_huh1ugp wm-shine"/><path class="wm-k ze3w6dqil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:music-note"} {...others} />);
}

export default Component;
