import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwgnkybdd.css';
import '../../css/f/fvo0x63-t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="bwgnkybdd"/><path clip-rule="evenodd" class="fvo0x63-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:user-comment-bold"} {...others} />);
}

export default Component;
