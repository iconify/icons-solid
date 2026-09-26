import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unklte81i.css';
import '../../css/u/uhqipab8n.css';
import '../../css/v/v8q09l-bp.css';
import '../../css/q/q2uz5z3xk.css';
import '../../css/a/a8i6x4bay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="unklte81i"/><path class="uhqipab8n"/><path class="v8q09l-bp"/><path clip-rule="evenodd" class="q2uz5z3xk"/><path class="a8i6x4bay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-cog-bold"} {...others} />);
}

export default Component;
