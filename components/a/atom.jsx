import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9-4wwu6b.css';
import '../../css/n/n-pudcb_b.css';
import '../../css/n/n47esuubj.css';
import '../../css/p/pl7v37b5g.css';
import '../../css/v/vxjtyogge.css';
import '../../css/b/bxsug5byf.css';
import '../../css/g/g17z7sbxx.css';
import '../../css/v/vt2xphtly.css';
import '../../css/q/q225sgbry.css';
import '../../css/j/jcalqkb_c.css';
import '../../css/n/nko3u73gb.css';
import '../../css/n/njztjl16r.css';
import '../../css/x/xgco-e-xl.css';
import '../../css/h/hj2mvlg1a.css';
import '../../css/r/rgsar8b0y.css';
import '../../css/m/m07ls1t3s.css';
import '../../css/n/nzvpy6s7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a9-4wwu6b wm-shadow"/><path class="n-pudcb_b wm-k"/><path class="n47esuubj wm-k"/><path class="pl7v37b5g wm-k"/><path class="vxjtyogge wm-k"/><path class="bxsug5byf wm-k"/><path class="g17z7sbxx wm-k"/><path class="vt2xphtly wm-a"/><path class="q225sgbry wm-a"/><path class="jcalqkb_c wm-k"/><path class="nko3u73gb wm-k"/><path class="njztjl16r wm-k"/><path class="wm-k xgco-e-xl"/><path class="hj2mvlg1a wm-k"/><path class="rgsar8b0y wm-k"/><path class="m07ls1t3s wm-k"/><path class="nzvpy6s7w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:atom"} {...others} />);
}

export default Component;
