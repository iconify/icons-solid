import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sf9w4fbdp.css';
import '../../css/k/kx1xlobhp.css';
import '../../css/t/tf-bdq1-t.css';
import '../../css/x/xlofp7gdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sf9w4fbdp"/><path class="kx1xlobhp wm-a"/><path class="tf-bdq1-t wm-k"/><path class="wm-a xlofp7gdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laddoo-sketch"} {...others} />);
}

export default Component;
