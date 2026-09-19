import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7pe1wg0f.css';
import '../../css/s/shg7yeb8k.css';
import '../../css/c/c9kt_qbdh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j7pe1wg0f"/><path clip-rule="evenodd" class="shg7yeb8k"/><path class="c9kt_qbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:terminal-debian"} {...others} />);
}

export default Component;
