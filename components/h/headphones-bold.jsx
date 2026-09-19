import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mj86nfbjt.css';
import '../../css/w/w9_t02b1j.css';
import '../../css/o/osqcjnb_y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="mj86nfbjt"/><path clip-rule="evenodd" class="w9_t02b1j"/><path class="osqcjnb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:headphones-bold"} {...others} />);
}

export default Component;
