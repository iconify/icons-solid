import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/htexibawf.css';
import '../../css/v/vr3llnbmk.css';
import '../../css/w/wplmp2btw.css';
import '../../css/a/ajxwqpb9u.css';
import '../../css/w/wx95qzg_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="htexibawf wm-k"/><path class="vr3llnbmk wm-a"/><path class="wm-shadow wplmp2btw"/><path class="ajxwqpb9u wm-k"/><path class="wm-a wx95qzg_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-pair-engrave"} {...others} />);
}

export default Component;
