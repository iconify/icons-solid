import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/c/c47erunsy.css';
import '../../css/e/e649cbb6h.css';
import '../../css/i/ii7kykbfv.css';
import '../../css/k/k5dut_b6t.css';
import '../../css/p/p5baf7bud.css';
import '../../css/u/u2xqz3bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKxnKhc7v" x1="1.5" x2="22.5" y1="3.5" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="c47erunsy wm-k"/><path stroke="url(#SVGKxnKhc7v)" class="e649cbb6h wm-s"/><path class="ii7kykbfv wm-shine"/><path class="k5dut_b6t wm-shine"/><path class="p5baf7bud wm-shine"/><path class="u2xqz3bxq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:mail-check"} {...others} />);
}

export default Component;
