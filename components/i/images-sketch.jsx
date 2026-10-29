import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kyresxbso.css';
import '../../css/k/ks2pbvbhi.css';
import '../../css/y/y5ic9l9qg.css';
import '../../css/c/cbas9yu_l.css';
import '../../css/q/q1y3sf5ml.css';
import '../../css/y/ykarvbcfu.css';
import '../../css/t/tv3t0gbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kyresxbso"/><path class="ks2pbvbhi wm-k"/><path class="wm-k y5ic9l9qg"/><path class="cbas9yu_l wm-k"/><path class="q1y3sf5ml wm-k"/><path class="wm-a ykarvbcfu"/><path class="tv3t0gbis wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:images-sketch"} {...others} />);
}

export default Component;
