import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub0p2rb4l.css';
import '../../css/n/nd_emezuh.css';
import '../../css/q/qznqlw_ir.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ub0p2rb4l"/><path class="nd_emezuh"/><path class="qznqlw_ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:music-player"} {...others} />);
}

export default Component;
