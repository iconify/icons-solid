import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ts7f3ccvg.css';
import '../../css/s/sf9ffevpn.css';
import '../../css/e/ea2rukt_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ts7f3ccvg"/><path class="sf9ffevpn"/><path class="ea2rukt_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-cloud-fast-wind"} {...others} />);
}

export default Component;
