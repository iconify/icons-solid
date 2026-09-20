import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q1m15dbht.css';
import '../../css/x/x953b1ban.css';
import '../../css/a/aqe2mdwjw.css';
import '../../css/n/nt_-r4bqh.css';
import '../../css/g/gplp858_w.css';
import '../../css/i/idszyhbin.css';
import '../../css/h/h00hr8bwq.css';
import '../../css/d/dyn69sv8m.css';
import '../../css/a/az10qsb-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="q1m15dbht"/><path class="x953b1ban"/><path class="aqe2mdwjw"/><path class="nt_-r4bqh"/><path class="gplp858_w"/><path class="idszyhbin"/><path class="h00hr8bwq"/><path class="dyn69sv8m"/><path class="az10qsb-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-knob-linear"} {...others} />);
}

export default Component;
