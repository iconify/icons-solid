import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8y7yf-ve.css';
import '../../css/c/ciu-12f_r.css';
import '../../css/o/oq9cuob_h.css';
import '../../css/p/pdz-qnx8r.css';
import '../../css/c/c4_wodreq.css';
import '../../css/z/z1by332af.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="i8y7yf-ve wm-deco"/><path class="ciu-12f_r wm-deco"/><path class="oq9cuob_h wm-deco"/><path class="pdz-qnx8r wm-k"/><path class="c4_wodreq wm-a"/><path class="wm-k z1by332af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-blueprint"} {...others} />);
}

export default Component;
