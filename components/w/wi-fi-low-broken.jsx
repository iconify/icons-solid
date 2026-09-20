import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zj2p4py0y.css';
import '../../css/p/pn5tqtb4p.css';
import '../../css/i/iejxo-b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zj2p4py0y"/><path class="pn5tqtb4p"/><path class="iejxo-b0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-low-broken"} {...others} />);
}

export default Component;
