import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u6cc478fb.css';
import '../../css/t/t9dnbacsw.css';
import '../../css/p/pq9kf6bjq.css';
import '../../css/m/mfjt80bej.css';
import '../../css/v/v0_jtv92y.css';
import '../../css/h/hg-y1bbyf.css';
import '../../css/w/w60svmb5a.css';
import '../../css/m/msmfupalt.css';
import '../../css/t/t65gdzbfx.css';
import '../../css/b/b73jetb_i.css';
import '../../css/q/qhsi_6b5e.css';
import '../../css/p/pgaaz7bvy.css';
import '../../css/s/sqojplbmy.css';
import '../../css/p/p7d7q9blc.css';
import '../../css/y/y5sz_bcfe.css';
import '../../css/f/fgjp9jrry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u6cc478fb wm-shadow"/><path class="t9dnbacsw wm-a"/><path class="pq9kf6bjq wm-a"/><path class="mfjt80bej wm-a"/><path class="v0_jtv92y wm-a"/><path class="hg-y1bbyf wm-a"/><path class="w60svmb5a wm-a"/><path class="msmfupalt wm-k"/><path class="t65gdzbfx wm-k"/><path class="b73jetb_i wm-k"/><path class="qhsi_6b5e wm-k"/><path class="pgaaz7bvy wm-k"/><path class="sqojplbmy wm-k"/><path class="p7d7q9blc wm-shine"/><path class="wm-k y5sz_bcfe"/><path class="fgjp9jrry wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:rose"} {...others} />);
}

export default Component;
