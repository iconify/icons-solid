import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ia2gzct5r.css';
import '../../css/n/nd9pb_bwa.css';
import '../../css/k/kd08ygb7j.css';
import '../../css/t/t0oo84s0x.css';
import '../../css/q/qcidxubyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ia2gzct5r wm-a"/><path class="nd9pb_bwa wm-k"/><path class="kd08ygb7j wm-k"/><path class="t0oo84s0x wm-a"/><path class="qcidxubyu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radar-sketch"} {...others} />);
}

export default Component;
