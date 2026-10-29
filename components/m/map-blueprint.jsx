import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p_dvz6bea.css';
import '../../css/n/nge5cfbll.css';
import '../../css/w/w1vuqf11k.css';
import '../../css/k/knuz6bbww.css';
import '../../css/l/lt61czblz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p_dvz6bea wm-deco"/><path class="nge5cfbll wm-deco"/><path class="w1vuqf11k wm-k"/><path class="knuz6bbww wm-a"/><path class="lt61czblz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-blueprint"} {...others} />);
}

export default Component;
