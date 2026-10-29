import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pv_dp6m6y.css';
import '../../css/r/r3avv1dah.css';
import '../../css/x/xisvx362d.css';
import '../../css/j/jnsto-k8v.css';
import '../../css/f/ffueqky6d.css';
import '../../css/p/pmpgqab4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pv_dp6m6y wm-shadow"/><path class="r3avv1dah"/><path class="xisvx362d"/><path class="jnsto-k8v"/><path class="ffueqky6d wm-shine"/><path class="pmpgqab4x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:command"} {...others} />);
}

export default Component;
