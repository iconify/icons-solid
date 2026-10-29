import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iu3gq1bbl.css';
import '../../css/n/nyq5umbcq.css';
import '../../css/l/ln_4v0bzh.css';
import '../../css/q/qdml1ce1u.css';
import '../../css/f/f8sbizbdp.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/y/y_zzz-xtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="iu3gq1bbl wm-shadow"/><path class="nyq5umbcq"/><path class="ln_4v0bzh"/><path class="qdml1ce1u"/><path class="f8sbizbdp wm-shine"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="wm-deco y_zzz-xtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:eye-off"} {...others} />);
}

export default Component;
