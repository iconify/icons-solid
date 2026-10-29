import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nco5g-rav.css';
import '../../css/y/ymnvc_coe.css';
import '../../css/s/sz8giyy7i.css';
import '../../css/r/ri7rjxmdv.css';
import '../../css/o/or5qoybza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nco5g-rav wm-k"/><path class="wm-k ymnvc_coe"/><path class="sz8giyy7i wm-k"/><path class="ri7rjxmdv wm-k"/><path class="or5qoybza wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-boy-sketch"} {...others} />);
}

export default Component;
