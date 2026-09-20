import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzy9852gd.css';
import '../../css/k/kg_k8zbim.css';
import '../../css/p/pu_oodqxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kzy9852gd"/><path class="kg_k8zbim"/><path class="pu_oodqxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-broken"} {...others} />);
}

export default Component;
