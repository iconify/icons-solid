import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2gcedbpg.css';
import '../../css/r/rig0wobgm.css';
import '../../css/c/cnkwybbwb.css';
import '../../css/x/xt6485bfx.css';
import '../../css/q/qin03mc9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p2gcedbpg"/><path class="rig0wobgm"/><path class="cnkwybbwb"/><path class="xt6485bfx"/><path class="qin03mc9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-bold-duotone"} {...others} />);
}

export default Component;
