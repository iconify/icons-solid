import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/psw7ik7pc.css';
import '../../css/q/qxw4fpbyd.css';
import '../../css/l/lx__tekse.css';
import '../../css/e/eutgqsdgd.css';
import '../../css/e/e1witcc7p.css';
import '../../css/w/w4liczgcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="psw7ik7pc wm-shadow"/><path class="qxw4fpbyd"/><path class="lx__tekse"/><path class="eutgqsdgd"/><path class="e1witcc7p"/><path class="w4liczgcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tree-pine"} {...others} />);
}

export default Component;
