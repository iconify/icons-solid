import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bbtlecc_g.css';
import '../../css/q/qpjl44cny.css';
import '../../css/n/nowt54uvr.css';
import '../../css/t/t-pxa_bpn.css';
import '../../css/d/dkhtn4wfq.css';
import '../../css/h/hs14odbir.css';
import '../../css/e/ect5-1brc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bbtlecc_g"/><path class="qpjl44cny"/><path class="nowt54uvr"/><path class="t-pxa_bpn"/><path class="dkhtn4wfq"/><path class="hs14odbir"/><path class="ect5-1brc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fuel-linear"} {...others} />);
}

export default Component;
