import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q6wx11bze.css';
import '../../css/l/lz-qvmfrx.css';
import '../../css/y/ynmcfyb2o.css';
import '../../css/p/pxs307brl.css';
import '../../css/f/f26bn-hui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q6wx11bze wm-k"/><path class="lz-qvmfrx wm-shadow"/><path class="wm-k ynmcfyb2o"/><path class="pxs307brl wm-k"/><path class="f26bn-hui wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:megaphone-engrave"} {...others} />);
}

export default Component;
