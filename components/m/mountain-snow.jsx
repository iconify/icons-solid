import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vy3ejgbnz.css';
import '../../css/i/izzimqm0d.css';
import '../../css/m/mzu9szhwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vy3ejgbnz"/><path class="izzimqm0d"/><path class="mzu9szhwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mountain-snow"} {...others} />);
}

export default Component;
