import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caog0qvka.css';
import '../../css/f/fvkw4oiyc.css';
import '../../css/v/v5l5vgbks.css';
import '../../css/h/hxi5c3b8i.css';
import '../../css/e/e_un4ubpg.css';
import '../../css/x/xkvin1h0r.css';
import '../../css/f/fng6irbns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG6WNJNcPe)" class="caog0qvka"><path class="fvkw4oiyc"/><path class="v5l5vgbks"/><path class="hxi5c3b8i"/><path class="e_un4ubpg"/><path class="xkvin1h0r"/></g><defs><clipPath id="SVG6WNJNcPe"><rect class="fng6irbns"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-old-linear"} {...others} />);
}

export default Component;
