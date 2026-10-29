import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ghpiukbhz.css';
import '../../css/b/bqikkxbbg.css';
import '../../css/m/m_mr1rjdk.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ghpiukbhz wm-k"/><path class="bqikkxbbg"/><path class="m_mr1rjdk"/><path class="ohtj0i3jo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:timer-off"} {...others} />);
}

export default Component;
