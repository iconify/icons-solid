import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwcxpfyzy.css';
import '../../css/i/itjas8y7w.css';
import '../../css/a/apb_2_b5k.css';
import '../../css/p/pk11pab5e.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/o/oxol8u2xx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lwcxpfyzy wm-k"/><path class="itjas8y7w wm-a"/><path class="apb_2_b5k wm-shadow"/><path class="pk11pab5e wm-k"/><path class="kye7fgb5m wm-a"/><path class="oxol8u2xx wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dices-engrave"} {...others} />);
}

export default Component;
