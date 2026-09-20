import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/phq1xbbnt.css';
import '../../css/i/in781saan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="phq1xbbnt"/><path class="in781saan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:truck-arrow-up-sharp-fill"} {...others} />);
}

export default Component;
