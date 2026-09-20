import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s8ozk_bvp.css';
import '../../css/m/mhrx-fb4o.css';
import '../../css/h/hk3yrq41f.css';
import '../../css/c/cd5mfpgqy.css';
import '../../css/k/kk05o5b_l.css';
import '../../css/a/aru2yfbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s8ozk_bvp"/><path class="mhrx-fb4o"/><path class="hk3yrq41f"/><path class="cd5mfpgqy"/><path class="kk05o5b_l"/><path class="aru2yfbdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gps-broken"} {...others} />);
}

export default Component;
