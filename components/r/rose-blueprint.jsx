import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iw59qgiix.css';
import '../../css/v/vmqmfhb4x.css';
import '../../css/o/o3ggb2czz.css';
import '../../css/l/lmicxvbhi.css';
import '../../css/q/qpsoc4eos.css';
import '../../css/r/rtvuhe86u.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iw59qgiix wm-deco"/><path class="vmqmfhb4x wm-deco"/><path class="o3ggb2czz wm-deco"/><path class="lmicxvbhi wm-k"/><path class="qpsoc4eos wm-a"/><path class="rtvuhe86u wm-k"/><path class="wm-a zawcaob5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rose-blueprint"} {...others} />);
}

export default Component;
