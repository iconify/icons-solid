import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lak79pbge.css';
import '../../css/r/rvil501-p.css';
import '../../css/u/uecn1lb3p.css';
import '../../css/o/omi2j1bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lak79pbge"/><path class="rvil501-p"/><path class="uecn1lb3p"/><path class="omi2j1bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-no-axes-combined-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
