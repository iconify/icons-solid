import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/x/xsmpgn9ou.css';
import '../../css/g/gcele9b1a.css';
import '../../css/r/rgx-w1ujt.css';
import '../../css/x/xh9-lyb3v.css';
import '../../css/u/u4f7fnacj.css';
import '../../css/u/ue7s0ibaw.css';
import '../../css/s/s9kmoh33v.css';
import '../../css/h/hc3vde2ri.css';
import '../../css/a/amvu9vbcp.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="xsmpgn9ou"/><path class="gcele9b1a"/><path class="rgx-w1ujt"/><path class="xh9-lyb3v"/><path class="u4f7fnacj"/><path class="ue7s0ibaw"/><path class="s9kmoh33v"/><path class="hc3vde2ri"/><path class="amvu9vbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:balloon-tour"} {...others} />);
}

export default Component;
