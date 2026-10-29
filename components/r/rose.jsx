import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ez2ujqbwz.css';
import '../../css/a/aum4vobni.css';
import '../../css/j/j7sapabcq.css';
import '../../css/x/xrodaj0ai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ez2ujqbwz wm-k"/><path class="aum4vobni wm-a"/><path class="j7sapabcq"/><path class="xrodaj0ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rose"} {...others} />);
}

export default Component;
