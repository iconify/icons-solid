import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzfl-gb7n.css';
import '../../css/i/i1jn65byr.css';
import '../../css/z/zyfkq2bfx.css';
import '../../css/j/j6gfei9yv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fzfl-gb7n"/><path clip-rule="evenodd" class="i1jn65byr"/><path clip-rule="evenodd" class="zyfkq2bfx"/><path class="j6gfei9yv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:lock-closed"} {...others} />);
}

export default Component;
