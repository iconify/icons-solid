import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mz5eu05dl.css';
import '../../css/s/se1u54bej.css';
import '../../css/c/ciqweqy_k.css';
import '../../css/q/q0y_wdlsd.css';
import '../../css/p/p0s704_er.css';
import '../../css/n/ntz-_wb5p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mz5eu05dl"/><path clip-rule="evenodd" class="se1u54bej"/><path clip-rule="evenodd" class="ciqweqy_k"/><path class="q0y_wdlsd"/><path class="p0s704_er"/><path class="ntz-_wb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:dslr"} {...others} />);
}

export default Component;
