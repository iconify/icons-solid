import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an8ojccmt.css';
import '../../css/w/wv6lxgbyg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="an8ojccmt"/><path clip-rule="evenodd" class="wv6lxgbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:image-1-bold"} {...others} />);
}

export default Component;
