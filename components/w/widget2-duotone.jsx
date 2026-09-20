import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdf25j1lg.css';
import '../../css/x/xftns5b3n.css';
import '../../css/c/ca5q_qgrk.css';
import '../../css/x/x1v26obeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rdf25j1lg"/><path clip-rule="evenodd" class="xftns5b3n"/><path class="ca5q_qgrk"/><path class="x1v26obeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:widget2-duotone"} {...others} />);
}

export default Component;
