import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w9ev0u06g.css';
import '../../css/s/smyt2abdo.css';
import '../../css/m/mojekibdu.css';
import '../../css/v/vona7jm3r.css';
import '../../css/e/e_lj68bwt.css';
import '../../css/o/of7brpb_h.css';
import '../../css/n/ncgw0duyw.css';
import '../../css/j/jmts8nrqy.css';
import '../../css/x/xd64bxbxm.css';
import '../../css/m/mrxdymbro.css';
import '../../css/p/pylvqd1im.css';
import '../../css/h/hpozz6-fa.css';
import '../../css/p/piixc3bej.css';
import '../../css/h/hwxxnk4tp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w9ev0u06g"/><path class="smyt2abdo wm-a"/><path class="mojekibdu wm-k"/><path class="vona7jm3r wm-k"/><path class="e_lj68bwt wm-k"/><path class="of7brpb_h wm-k"/><path class="ncgw0duyw wm-k"/><path class="jmts8nrqy wm-k"/><path class="wm-k xd64bxbxm"/><path class="mrxdymbro wm-s"/><path class="pylvqd1im wm-a"/><path class="hpozz6-fa wm-k"/><path class="piixc3bej wm-k"/><path class="hwxxnk4tp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:nutcracker-sketch"} {...others} />);
}

export default Component;
