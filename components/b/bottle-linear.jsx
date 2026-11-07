import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p1_nczbpv.css';
import '../../css/f/fdqyawopr.css';
import '../../css/k/kg_k8zbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p1_nczbpv"/><path class="fdqyawopr"/><path class="kg_k8zbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bottle-linear"} {...others} />);
}

export default Component;
