import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sv4cljb-z.css';
import '../../css/e/en-mohuvb.css';
import '../../css/j/jea1dt_pt.css';
import '../../css/g/g62ujrumz.css';
import '../../css/c/caoyq1bgw.css';
import '../../css/k/kf_ij0b-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sv4cljb-z wm-shadow"/><path class="en-mohuvb wm-shadow"/><path class="jea1dt_pt"/><path class="g62ujrumz"/><path class="caoyq1bgw"/><path class="kf_ij0b-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flag-checkered"} {...others} />);
}

export default Component;
