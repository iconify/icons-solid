import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kdx2-qp7s.css';
import '../../css/s/s0ay1abnm.css';
import '../../css/w/w37drss5a.css';
import '../../css/p/p2-28vwqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kdx2-qp7s"/><path class="s0ay1abnm"/><path class="w37drss5a"/><path class="p2-28vwqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-linear"} {...others} />);
}

export default Component;
