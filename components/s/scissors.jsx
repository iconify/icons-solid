import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3kywkbui.css';
import '../../css/w/w05e6sayd.css';
import '../../css/j/j-woxn_pq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o3kywkbui"/><path class="w05e6sayd"/><path class="j-woxn_pq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:scissors"} {...others} />);
}

export default Component;
