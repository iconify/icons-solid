import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mjn_7me0r.css';
import '../../css/p/pa4f6f53s.css';
import '../../css/k/kp7jjwb1i.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/a/amuvueb_r.css';
import '../../css/t/taf35-bva.css';
import '../../css/x/xh68cfb8p.css';
import '../../css/i/i3xmsybwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mjn_7me0r"/><path class="pa4f6f53s"/><path class="kp7jjwb1i wm-shine"/><path class="hooc3vbcx wm-k"/><path class="amuvueb_r wm-a"/><path class="taf35-bva"/><path class="xh68cfb8p"/><path class="i3xmsybwx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:badge-check"} {...others} />);
}

export default Component;
