import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i43jttb1d.css';
import '../../css/k/ksu4hvb6k.css';
import '../../css/o/ovikvmgdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="i43jttb1d"/><path class="ksu4hvb6k"/><path class="ovikvmgdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shield-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
