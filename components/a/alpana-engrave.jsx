import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qit8uhbvr.css';
import '../../css/i/i6o2gh9jr.css';
import '../../css/g/g57pb1-tv.css';
import '../../css/p/pyldh9-2r.css';
import '../../css/h/h1js73brr.css';
import '../../css/k/k2p9idmnc.css';
import '../../css/c/cv62qmlrj.css';
import '../../css/b/buidcqb7h.css';
import '../../css/g/gpn_a8bru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qit8uhbvr wm-k"/><path class="i6o2gh9jr wm-a"/><path class="g57pb1-tv wm-shadow"/><path class="pyldh9-2r wm-k"/><path class="h1js73brr wm-a"/><circle class="k2p9idmnc wm-a"/><circle class="cv62qmlrj wm-a"/><circle class="buidcqb7h wm-a"/><circle class="gpn_a8bru wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alpana-engrave"} {...others} />);
}

export default Component;
