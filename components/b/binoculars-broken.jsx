import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oigusgbeq.css';
import '../../css/n/n7mec0bwr.css';
import '../../css/h/hf2jg-64g.css';
import '../../css/s/sqz4f0acc.css';
import '../../css/p/p_ni59b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oigusgbeq"/><path class="n7mec0bwr"/><path class="hf2jg-64g"/><path class="sqz4f0acc"/><path class="p_ni59b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-broken"} {...others} />);
}

export default Component;
