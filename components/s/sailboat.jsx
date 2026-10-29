import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rju07pb-u.css';
import '../../css/j/jvu317s8j.css';
import '../../css/l/lwbuswb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rju07pb-u wm-k"/><path class="jvu317s8j wm-a"/><path class="lwbuswb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sailboat"} {...others} />);
}

export default Component;
