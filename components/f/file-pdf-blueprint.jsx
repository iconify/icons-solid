import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/krnf_lb1i.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/w/wje7qb1vj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="krnf_lb1i wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="vp3_m3b5w wm-k"/><path class="wm-a z4bbp2bhq"/><path class="wje7qb1vj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-pdf-blueprint"} {...others} />);
}

export default Component;
