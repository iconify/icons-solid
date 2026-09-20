import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v3bnzubkl.css';
import '../../css/s/s5xpay_7j.css';
import '../../css/t/tonplxqkt.css';
import '../../css/t/tnwts_9gl.css';
import '../../css/a/a2rh-x5uk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v3bnzubkl"/><path class="s5xpay_7j"/><path class="tonplxqkt"/><path class="tnwts_9gl"/><path class="a2rh-x5uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-down-broken"} {...others} />);
}

export default Component;
