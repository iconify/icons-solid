import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uzrxcz3ph.css';
import '../../css/r/rdkkd29wn.css';
import '../../css/n/nw0p1ubxk.css';
import '../../css/y/ydek3pbkk.css';
import '../../css/f/frma-obdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uzrxcz3ph"/><path class="rdkkd29wn"/><path class="nw0p1ubxk"/><path class="ydek3pbkk"/><path class="frma-obdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:analytics-board-graph-line"} {...others} />);
}

export default Component;
