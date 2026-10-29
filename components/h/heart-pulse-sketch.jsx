import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ns06ew8yj.css';
import '../../css/y/yajyyvbsx.css';
import '../../css/f/fjo69vb2a.css';
import '../../css/n/nole5l7ip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ns06ew8yj wm-k"/><path class="wm-k yajyyvbsx"/><path class="fjo69vb2a wm-k"/><path class="nole5l7ip wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-pulse-sketch"} {...others} />);
}

export default Component;
