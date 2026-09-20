import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/ql-qkkber.css';
import '../../css/d/d2m1izizu.css';
import '../../css/r/rt2zemb8t.css';
import '../../css/k/kbty90b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ql-qkkber"/><path clip-rule="evenodd" class="d2m1izizu"/><path class="rt2zemb8t"/><path class="kbty90b-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-cog-bold"} {...others} />);
}

export default Component;
