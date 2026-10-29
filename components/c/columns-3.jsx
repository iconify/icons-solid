import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qivy7l4oy.css';
import '../../css/e/e7rwp4bdz.css';
import '../../css/n/npth7ccgm.css';
import '../../css/d/d8272sbmb.css';
import '../../css/m/mslr61bdz.css';
import '../../css/o/owrkdvbkc.css';
import '../../css/w/wdr0v5bdr.css';
import '../../css/u/uamvh7fha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qivy7l4oy wm-shadow"/><path class="e7rwp4bdz wm-k"/><path class="npth7ccgm wm-k"/><path class="d8272sbmb wm-k"/><path class="mslr61bdz wm-k"/><path class="owrkdvbkc wm-k"/><path class="wdr0v5bdr wm-shine"/><path class="uamvh7fha wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:columns-3"} {...others} />);
}

export default Component;
