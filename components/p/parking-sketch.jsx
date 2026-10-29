import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g0i9lk7vr.css';
import '../../css/q/q7bmnwb4a.css';
import '../../css/x/x3dlulb2k.css';
import '../../css/l/l-m2svu3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g0i9lk7vr"/><path class="q7bmnwb4a wm-a"/><path class="wm-k x3dlulb2k"/><path class="l-m2svu3x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:parking-sketch"} {...others} />);
}

export default Component;
