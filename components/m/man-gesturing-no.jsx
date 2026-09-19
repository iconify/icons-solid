import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xk6mm_bed.css';
import '../../css/g/gxcprm_mu.css';
import '../../css/i/i8dbu6blh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="xk6mm_bed"/><path class="gxcprm_mu"/><path class="i8dbu6blh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-gesturing-no"} {...others} />);
}

export default Component;
