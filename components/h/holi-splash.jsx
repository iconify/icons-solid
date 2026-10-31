import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sosts_bsb.css';
import '../../css/u/uuxs9h8iu.css';
import '../../css/j/jf3c2ybmu.css';
import '../../css/o/ouqmv4pjr.css';
import '../../css/e/ea8z-ybmv.css';
import '../../css/i/ievz6-bgp.css';
import '../../css/k/k6dkddbtm.css';
import '../../css/t/tg77xvbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sosts_bsb"/><path class="uuxs9h8iu"/><path class="jf3c2ybmu wm-s"/><path class="ouqmv4pjr wm-shine"/><path class="ea8z-ybmv wm-k"/><path class="ievz6-bgp wm-a"/><path class="k6dkddbtm wm-s"/><path class="tg77xvbdv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:holi-splash"} {...others} />);
}

export default Component;
