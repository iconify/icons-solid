import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rydv3c-sn.css';
import '../../css/p/p-hrpq4_g.css';
import '../../css/u/un1y0bcem.css';
import '../../css/p/pmmvftdsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rydv3c-sn wm-k"/><path class="p-hrpq4_g wm-a"/><path class="un1y0bcem"/><path class="pmmvftdsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:candy-bucket"} {...others} />);
}

export default Component;
