import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg6agab_p.css';
import '../../css/t/t0-ajfn1i.css';
import '../../css/z/zw-09_k_n.css';
import '../../css/f/fdf08cccu.css';
import '../../css/h/hhrd7tj8x.css';
import '../../css/k/k1_q4fhvq.css';
import '../../css/t/tdmjqnquq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg6agab_p wm-k"/><path class="t0-ajfn1i wm-k"/><path class="wm-k zw-09_k_n"/><path class="fdf08cccu wm-shine"/><path class="hhrd7tj8x wm-a"/><path class="k1_q4fhvq wm-a"/><path class="tdmjqnquq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:circle-arrow-left"} {...others} />);
}

export default Component;
