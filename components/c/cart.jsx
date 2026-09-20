import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq7r2743t.css';
import '../../css/m/my3_w-b2x.css';
import '../../css/d/dfy9v9wqo.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="pq7r2743t"/><path clip-rule="evenodd" class="my3_w-b2x"/><path class="dfy9v9wqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cart"} {...others} />);
}

export default Component;
