import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r31eezbqv.css';
import '../../css/f/fs60iccsb.css';
import '../../css/u/u00ey8bps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r31eezbqv"/><path class="fs60iccsb"/><circle class="u00ey8bps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:graph-new-linear"} {...others} />);
}

export default Component;
