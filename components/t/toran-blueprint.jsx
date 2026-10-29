import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c3dif3btv.css';
import '../../css/d/dxvbp3a9y.css';
import '../../css/g/g1zwcz88r.css';
import '../../css/t/t_566_hzz.css';
import '../../css/g/gbrk6z95p.css';
import '../../css/y/y53mbabhi.css';
import '../../css/t/t0c6ldplu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="c3dif3btv wm-deco"/><path class="dxvbp3a9y wm-deco"/><path class="g1zwcz88r wm-deco"/><path class="t_566_hzz wm-deco"/><path class="gbrk6z95p wm-k"/><path class="wm-a y53mbabhi"/><path class="t0c6ldplu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toran-blueprint"} {...others} />);
}

export default Component;
