import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/cx9cnc_3r.css';
import '../../css/y/yidfabb7b.css';
import '../../css/i/inmwp5blh.css';
import '../../css/x/x8wkfmsls.css';
import '../../css/w/weg5fpkne.css';
import '../../css/b/bbubfy86s.css';
import '../../css/e/eos_9475n.css';
import '../../css/e/eg1_bybdq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="cx9cnc_3r"/><path class="yidfabb7b"/><path class="inmwp5blh"/><path class="x8wkfmsls"/><path class="weg5fpkne"/><path class="bbubfy86s"/><path class="eos_9475n"/><path class="eg1_bybdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:basketball-stand"} {...others} />);
}

export default Component;
