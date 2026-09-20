import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/phq1xbbnt.css';
import '../../css/u/u0m05bp3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="phq1xbbnt"/><path class="u0m05bp3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-electric-sharp-fill"} {...others} />);
}

export default Component;
