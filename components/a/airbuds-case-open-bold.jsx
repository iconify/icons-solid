import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxbakg5mu.css';
import '../../css/x/x69whvb-k.css';
import '../../css/r/r78xt_b4d.css';
import '../../css/i/i3pkgebvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cxbakg5mu"/><path class="x69whvb-k"/><path class="r78xt_b4d"/><path class="i3pkgebvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-case-open-bold"} {...others} />);
}

export default Component;
