import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pjqgfu9mr.css';
import '../../css/d/d7w1vj4gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="pjqgfu9mr"/><path class="d7w1vj4gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cursor-click"} {...others} />);
}

export default Component;
