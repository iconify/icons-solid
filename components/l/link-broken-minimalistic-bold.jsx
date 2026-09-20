import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y8zdmx7kg.css';
import '../../css/y/yh37ftn9n.css';
import '../../css/e/ell5nh48g.css';
import '../../css/u/u--jkffzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y8zdmx7kg"/><path class="yh37ftn9n"/><path class="ell5nh48g"/><path class="u--jkffzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-minimalistic-bold"} {...others} />);
}

export default Component;
