import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q40-4gbog.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/v/vmamqn6if.css';
import '../../css/s/skh7z2_xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q40-4gbog"/><path class="jct4a2bzg"/><path class="vmamqn6if"/><path class="skh7z2_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-bold"} {...others} />);
}

export default Component;
