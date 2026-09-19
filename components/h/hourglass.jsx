import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h0if_0b6b.css';
import '../../css/q/q48sqacqk.css';
import '../../css/d/dlzep9_5l.css';
import '../../css/i/i9g5-wgsv.css';
import '../../css/r/raqv34b6m.css';
import '../../css/y/yz448vbqr.css';
import '../../css/e/e_4b1jkcn.css';
import '../../css/h/hlqyj9b0x.css';
import '../../css/x/x7edsb2zf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="h0if_0b6b"/><path class="q48sqacqk"/><path class="dlzep9_5l"/><path class="i9g5-wgsv"/><path class="raqv34b6m"/><path class="yz448vbqr"/><path class="e_4b1jkcn"/><path class="hlqyj9b0x"/><path class="x7edsb2zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hourglass"} {...others} />);
}

export default Component;
