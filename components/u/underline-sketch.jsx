import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s5q54hbds.css';
import '../../css/v/vqv71sbfv.css';
import '../../css/d/d4zzgtbcx.css';
import '../../css/m/mwx29-nua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s5q54hbds wm-k"/><path class="vqv71sbfv wm-a"/><path class="d4zzgtbcx wm-k"/><path class="mwx29-nua wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:underline-sketch"} {...others} />);
}

export default Component;
