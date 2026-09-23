import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yrcm1ibvg.css';
import '../../css/m/mus5l3b9c.css';
import '../../css/y/y9_9cbcfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yrcm1ibvg"/><path class="mus5l3b9c"/><path class="y9_9cbcfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wand-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
