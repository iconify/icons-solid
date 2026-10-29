import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kd2kgzxwm.css';
import '../../css/c/cmsh8wksz.css';
import '../../css/q/qgagtibcc.css';
import '../../css/w/wm0iktbrc.css';
import '../../css/f/f0qtlug9j.css';
import '../../css/s/sdpnigqsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kd2kgzxwm wm-k"/><path class="cmsh8wksz wm-k"/><path class="qgagtibcc wm-k"/><path class="wm-k wm0iktbrc"/><path class="f0qtlug9j wm-a"/><path class="sdpnigqsv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:variable-sketch"} {...others} />);
}

export default Component;
