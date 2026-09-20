import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnaonbckk.css';
import '../../css/d/db9u3ij6k.css';
import '../../css/f/fa211pb5n.css';
import '../../css/z/zf5aygbbh.css';
import '../../css/q/q-j7pjang.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnaonbckk"/><path class="db9u3ij6k"/><path class="fa211pb5n"/><path class="zf5aygbbh"/><path class="q-j7pjang"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:laptop-action-warning"} {...others} />);
}

export default Component;
