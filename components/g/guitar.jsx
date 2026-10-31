import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w14bglqwc.css';
import '../../css/z/zdthpactq.css';
import '../../css/d/dgfl7igji.css';
import '../../css/n/n4rdv5d2n.css';
import '../../css/b/bqxmfybgc.css';
import '../../css/y/yr8x0rb3t.css';
import '../../css/c/c6h4a5lob.css';
import '../../css/x/x_ykg4pjk.css';
import '../../css/i/izk00yb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w14bglqwc wm-k"/><path class="wm-a zdthpactq"/><path class="dgfl7igji wm-deco"/><path class="n4rdv5d2n wm-k"/><path class="bqxmfybgc wm-k"/><path class="wm-a yr8x0rb3t"/><path class="c6h4a5lob wm-shadow"/><path class="wm-shine x_ykg4pjk"/><path class="izk00yb7t wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:guitar"} {...others} />);
}

export default Component;
