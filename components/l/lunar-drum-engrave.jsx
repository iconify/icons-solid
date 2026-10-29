import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xqfgshbys.css';
import '../../css/m/ma26a8bzy.css';
import '../../css/j/j76mb7bbf.css';
import '../../css/m/mymtxlbif.css';
import '../../css/q/ql50srbzb.css';
import '../../css/s/sla9ccbde.css';
import '../../css/u/uoju-z_9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xqfgshbys"/><path class="ma26a8bzy wm-a"/><path class="j76mb7bbf wm-shadow"/><path class="mymtxlbif wm-k"/><path class="ql50srbzb wm-k"/><path class="sla9ccbde wm-s"/><path class="uoju-z_9h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum-engrave"} {...others} />);
}

export default Component;
