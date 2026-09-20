import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msr-g5qku.css';
import '../../css/q/qaw570b5w.css';
import '../../css/u/uztwjz-8c.css';
import '../../css/v/v3xyz11jq.css';
import '../../css/l/l04q3ccmm.css';
import '../../css/b/bgz2l5bqc.css';
import '../../css/h/h0ai_cc_p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="msr-g5qku"/><path class="qaw570b5w"/><path class="uztwjz-8c"/><path class="v3xyz11jq"/><path class="l04q3ccmm"/><path class="bgz2l5bqc"/><path class="h0ai_cc_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:browser-lock"} {...others} />);
}

export default Component;
