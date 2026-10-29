import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hrl56db3t.css';
import '../../css/h/hx1jtbbgy.css';
import '../../css/g/glni1gbio.css';
import '../../css/o/o9iv1eb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hrl56db3t wm-k"/><path class="hx1jtbbgy wm-s"/><path class="glni1gbio"/><path class="o9iv1eb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:globe-lock"} {...others} />);
}

export default Component;
