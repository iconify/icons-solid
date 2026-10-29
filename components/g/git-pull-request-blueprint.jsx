import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nwo8vjbtt.css';
import '../../css/x/xsyo0x1fz.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kgiyicvgm.css';
import '../../css/n/nvtflh6wc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nwo8vjbtt wm-deco"/><path class="wm-deco xsyo0x1fz"/><path class="vze4wuf6n wm-deco"/><path class="kgiyicvgm wm-k"/><path class="nvtflh6wc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-blueprint"} {...others} />);
}

export default Component;
