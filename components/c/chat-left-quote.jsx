import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eo6461byx.css';
import '../../css/f/f_25g8vim.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="eo6461byx"/><path class="f_25g8vim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-left-quote"} {...others} />);
}

export default Component;
