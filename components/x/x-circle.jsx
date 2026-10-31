import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl7-q1gvd.css';
import '../../css/i/ienu716pr.css';
import '../../css/k/k5ofrcbco.css';
import '../../css/c/c5t9sr9oa.css';
import '../../css/h/hc6hmqvpk.css';
import '../../css/a/ad9ke_blu.css';
import '../../css/j/jx6_6ebur.css';
import '../../css/s/so881cbep.css';
import '../../css/r/rwbmr2b1n.css';
import '../../css/s/sj0jlln8b.css';
import '../../css/p/pi52tqi0o.css';
import '../../css/s/sdowh5b5a.css';
import '../../css/m/mcmk67vng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hl7-q1gvd wm-shadow"/><path class="ienu716pr wm-k"/><path class="k5ofrcbco wm-k"/><path class="c5t9sr9oa wm-k"/><path class="hc6hmqvpk wm-k"/><path class="ad9ke_blu wm-k"/><path class="jx6_6ebur wm-shine"/><path class="so881cbep wm-a"/><path class="rwbmr2b1n wm-a"/><path class="sj0jlln8b wm-a"/><path class="pi52tqi0o wm-a"/><path class="sdowh5b5a wm-a"/><path class="mcmk67vng wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:x-circle"} {...others} />);
}

export default Component;
