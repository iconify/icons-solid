import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn6x5_bim.css';
import '../../css/a/awmsyvf0e.css';
import '../../css/c/cyyxj_bur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pn6x5_bim"/><path class="awmsyvf0e"/><path class="cyyxj_bur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-linear"} {...others} />);
}

export default Component;
