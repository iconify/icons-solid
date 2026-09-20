import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_ybdb3r.css';
import '../../css/j/j7dyzlxlx.css';
import '../../css/r/ryhenzbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ja_ybdb3r"/><path class="j7dyzlxlx"/><path clip-rule="evenodd" class="ryhenzbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:car-outline"} {...others} />);
}

export default Component;
