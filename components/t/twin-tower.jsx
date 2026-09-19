import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q4hc5kbiu.css';
import '../../css/k/ku-wnccdo.css';
import '../../css/m/m6k93ubvn.css';
import '../../css/u/u4agv6btr.css';
import '../../css/o/ogughjbsm.css';
import '../../css/v/vysxrcb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q4hc5kbiu"/><path class="ku-wnccdo"/><path class="m6k93ubvn"/><path class="u4agv6btr"/><path class="ogughjbsm"/><path class="vysxrcb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:twin-tower"} {...others} />);
}

export default Component;
