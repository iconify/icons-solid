import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2hvubbhh.css';
import '../../css/u/u1fz2nb3t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="k2hvubbhh"/><path class="u1fz2nb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chat-quote"} {...others} />);
}

export default Component;
