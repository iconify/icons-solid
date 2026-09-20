import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xu319g_cx.css';
import '../../css/c/cevi-y_in.css';
import '../../css/q/qpjllijze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xu319g_cx"/><path class="cevi-y_in"/><path class="qpjllijze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pathfinder-outline"} {...others} />);
}

export default Component;
