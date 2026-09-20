import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mubzgebav.css';
import '../../css/o/of-yjebhp.css';
import '../../css/m/mw7ysqb_q.css';
import '../../css/o/ozf8btzov.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mubzgebav"/><path class="of-yjebhp"/><path class="mw7ysqb_q"/><path class="ozf8btzov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:leave"} {...others} />);
}

export default Component;
