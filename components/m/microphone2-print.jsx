import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0wjjpbcb.css';
import '../../css/i/ix7gofp8i.css';
import '../../css/m/mypytn32n.css';
import '../../css/q/qu2_5fblt.css';
import '../../css/w/wr_qrubff.css';
import '../../css/e/ewg-w7n8h.css';
import '../../css/m/mvtcimv3c.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(38.27 11.502 5.582)" class="y0wjjpbcb"/><path class="ix7gofp8i"/><path class="mypytn32n"/><circle transform="rotate(38.27 10.115 4.356)" class="qu2_5fblt"/><path class="wr_qrubff"/><path class="ewg-w7n8h"/><path class="mvtcimv3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:microphone2-print"} {...others} />);
}

export default Component;
