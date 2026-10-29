import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wlv-fofiv.css';
import '../../css/t/ti5x8ytcl.css';
import '../../css/y/y54jm9wsc.css';
import '../../css/l/lc2stde9v.css';
import '../../css/q/qh-wm2bcn.css';
import '../../css/x/xzn0zfbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wlv-fofiv wm-deco"/><path class="ti5x8ytcl wm-deco"/><path class="wm-deco y54jm9wsc"/><path class="lc2stde9v wm-k"/><path class="qh-wm2bcn wm-a"/><path class="wm-a xzn0zfbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-horizontal-blueprint"} {...others} />);
}

export default Component;
