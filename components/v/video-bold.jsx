import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_anj2b6u.css';
import '../../css/b/bm7c4r5hg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><rect class="b_anj2b6u"/><path clip-rule="evenodd" class="bm7c4r5hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:video-bold"} {...others} />);
}

export default Component;
