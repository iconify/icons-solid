import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwp6q9bxu.css';
import '../../css/f/fotuh8qtd.css';
import '../../css/h/hm38-ccpa.css';
import '../../css/f/f3tg6ebbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kwp6q9bxu wm-k"/><path class="fotuh8qtd wm-shadow"/><path class="hm38-ccpa wm-k"/><path class="f3tg6ebbt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ethernet-port-engrave"} {...others} />);
}

export default Component;
