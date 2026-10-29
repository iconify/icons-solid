import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sqxgxfx8j.css';
import '../../css/o/o3ggb2czz.css';
import '../../css/o/oa8wtcqrr.css';
import '../../css/t/t-snm5blv.css';
import '../../css/l/l-9css3lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sqxgxfx8j wm-deco"/><path class="o3ggb2czz wm-deco"/><path class="oa8wtcqrr wm-k"/><path class="t-snm5blv wm-a"/><path class="l-9css3lp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-down-blueprint"} {...others} />);
}

export default Component;
