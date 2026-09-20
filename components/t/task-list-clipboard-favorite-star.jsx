import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q7cmimb1r.css';
import '../../css/r/rq8m0xmwq.css';
import '../../css/c/cb4dv35kh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q7cmimb1r"/><path class="rq8m0xmwq"/><path class="cb4dv35kh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:task-list-clipboard-favorite-star"} {...others} />);
}

export default Component;
