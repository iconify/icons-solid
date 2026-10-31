import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mciq7_yak.css';
import '../../css/f/fx18d968r.css';
import '../../css/v/vwc9j_27l.css';
import '../../css/b/b6foid2hb.css';
import '../../css/q/q1y2fzbpm.css';
import '../../css/u/u6n85bysd.css';
import '../../css/b/bpjksdbes.css';
import '../../css/w/wpme-du2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mciq7_yak wm-k"/><path class="fx18d968r wm-deco"/><path class="vwc9j_27l wm-k"/><path class="b6foid2hb wm-k"/><path class="q1y2fzbpm wm-shadow"/><path class="u6n85bysd wm-shine"/><path class="bpjksdbes wm-shine"/><path class="wm-shine wpme-du2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:message-square-text"} {...others} />);
}

export default Component;
