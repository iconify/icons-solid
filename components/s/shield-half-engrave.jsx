import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bro8vbcta.css';
import '../../css/s/s84x2zfvv.css';
import '../../css/q/qi8a1ybvv.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/p/p_jfkcbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bro8vbcta wm-k"/><path class="s84x2zfvv wm-a"/><path class="qi8a1ybvv wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="p_jfkcbaa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-half-engrave"} {...others} />);
}

export default Component;
