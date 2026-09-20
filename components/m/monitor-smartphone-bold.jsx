import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rs1mb3b0n.css';
import '../../css/w/wdmep9x_m.css';
import '../../css/u/utinae2nn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rs1mb3b0n"/><path class="wdmep9x_m"/><path clip-rule="evenodd" class="utinae2nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-smartphone-bold"} {...others} />);
}

export default Component;
