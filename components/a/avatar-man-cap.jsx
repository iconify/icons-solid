import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x-pvo40bb.css';
import '../../css/c/cj_fgxbge.css';
import '../../css/o/oxa33hb-l.css';
import '../../css/x/x0val9bto.css';
import '../../css/w/wgbewt5ei.css';
import '../../css/g/g_2d2h9lw.css';
import '../../css/k/kwj6ifbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x-pvo40bb"/><path class="cj_fgxbge"/><path class="oxa33hb-l"/><path class="x0val9bto"/><path class="wgbewt5ei"/><path class="g_2d2h9lw"/><path class="kwj6ifbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-man-cap"} {...others} />);
}

export default Component;
