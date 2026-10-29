import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kl36rlvot.css';
import '../../css/y/y6m9ydbrm.css';
import '../../css/b/b1ti3cxbu.css';
import '../../css/l/lq_cp1bfu.css';
import '../../css/d/dp9ap3b7v.css';
import '../../css/y/ywgqm0b7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kl36rlvot wm-k"/><path class="wm-a y6m9ydbrm"/><path class="b1ti3cxbu wm-shadow"/><path class="lq_cp1bfu wm-k"/><path class="dp9ap3b7v wm-k"/><path class="wm-a ywgqm0b7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dhak-engrave"} {...others} />);
}

export default Component;
