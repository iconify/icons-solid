import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6scb8b-g.css';
import '../../css/j/j5zg0bc7u.css';
import '../../css/o/ocihuquga.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x6scb8b-g"/><path class="j5zg0bc7u"/><path class="ocihuquga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-1-bold"} {...others} />);
}

export default Component;
