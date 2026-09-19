import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayoxdyb-f.css';
import '../../css/e/ema3ful7z.css';
import '../../css/b/b2-ai3t4q.css';
import '../../css/l/luj93bcjw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ayoxdyb-f"/><path class="ema3ful7z"/><rect transform="matrix(1 0 0 -1 37 64)" class="b2-ai3t4q"/><rect transform="matrix(1 0 0 -1 37 40)" class="luj93bcjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-size-up-1-bold"} {...others} />);
}

export default Component;
