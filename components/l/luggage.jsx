import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8j_chwzz.css';
import '../../css/n/nwsxvsb_q.css';
import '../../css/p/pd74hbhki.css';
import '../../css/r/rj0-12b9f.css';
import '../../css/f/fm8fwubrc.css';
import '../../css/m/mn90ckyed.css';
import '../../css/v/vr4iqz5ek.css';
import '../../css/y/ygjjigbvm.css';
import '../../css/b/b29z_5a4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8j_chwzz wm-k"/><path class="nwsxvsb_q wm-a"/><path class="pd74hbhki wm-deco"/><path class="rj0-12b9f wm-k"/><path class="fm8fwubrc wm-k"/><path class="mn90ckyed wm-a"/><path class="vr4iqz5ek wm-shadow"/><path class="wm-shine ygjjigbvm"/><path class="b29z_5a4q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:luggage"} {...others} />);
}

export default Component;
