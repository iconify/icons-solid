import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cs9frwbde.css';
import '../../css/k/k6bonybms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="cs9frwbde"/><path class="k6bonybms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-2-horizontal-sharp-fill"} {...others} />);
}

export default Component;
