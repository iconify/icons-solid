import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8myxrsji.css';
import '../../css/f/fn6lbqmuk.css';
import '../../css/a/afy8xbjmk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w8myxrsji"/><path clip-rule="evenodd" class="fn6lbqmuk"/><path class="afy8xbjmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-view-bold"} {...others} />);
}

export default Component;
