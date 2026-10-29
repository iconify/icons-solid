import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qczcrlmsi.css';
import '../../css/e/eh9yg0bsm.css';
import '../../css/b/bxel2rbnc.css';
import '../../css/b/b1xdfvzax.css';
import '../../css/t/ts2ozy7et.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qczcrlmsi"/><path class="eh9yg0bsm wm-k"/><path class="bxel2rbnc wm-s"/><path class="b1xdfvzax wm-k"/><path class="ts2ozy7et wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-off-sketch"} {...others} />);
}

export default Component;
