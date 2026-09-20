import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kpngb8ble.css';
import '../../css/u/u1sbtfbps.css';
import '../../css/t/tgagj5b1m.css';
import '../../css/w/w4394pj2y.css';
import '../../css/q/qpf-imbkb.css';
import '../../css/v/v6662i_bw.css';
import '../../css/e/e4kpjpbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kpngb8ble"/><path class="u1sbtfbps"/><path class="tgagj5b1m"/><path class="w4394pj2y"/><path class="qpf-imbkb"/><path class="v6662i_bw"/><path class="e4kpjpbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-minimalistic-broken"} {...others} />);
}

export default Component;
