import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bdjbd2-on.css';
import '../../css/e/emfzzjbuq.css';
import '../../css/i/ifhgh4slf.css';
import '../../css/p/pcf6f9bdf.css';
import '../../css/v/vylyqqb_g.css';
import '../../css/b/bazwajm-k.css';
import '../../css/a/ar140xbes.css';
import '../../css/c/c2y9hcbhp.css';
import '../../css/t/tvtjsgs0a.css';
import '../../css/w/w598qb3vu.css';
import '../../css/d/dafglku_s.css';
import '../../css/t/ta-nq1s_d.css';
import '../../css/t/tve7-zb0b.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="bdjbd2-on wm-shadow"/><path class="emfzzjbuq"/><path class="ifhgh4slf"/><path class="pcf6f9bdf"/><path class="vylyqqb_g"/><path class="bazwajm-k"/><path class="ar140xbes"/><path class="c2y9hcbhp"/><path class="tvtjsgs0a"/><path class="w598qb3vu"/><path class="dafglku_s wm-shine"/><path class="ta-nq1s_d wm-shine"/><path class="tve7-zb0b wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-person-headphones"} {...others} />);
}

export default Component;
