import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yrp8owbwe.css';
import '../../css/d/dgp6cjnjf.css';
import '../../css/m/mvz31c87g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yrp8owbwe"/><path class="dgp6cjnjf"/><path class="mvz31c87g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:snow-bold"} {...others} />);
}

export default Component;
