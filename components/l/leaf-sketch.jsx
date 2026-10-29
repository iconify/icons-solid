import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xlo2h6b6s.css';
import '../../css/h/hthrldewh.css';
import '../../css/k/kqyrhjb5c.css';
import '../../css/g/gipt-ubsi.css';
import '../../css/r/rwkqkubws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xlo2h6b6s"/><path class="hthrldewh wm-k"/><path class="kqyrhjb5c wm-a"/><path class="gipt-ubsi wm-k"/><path class="rwkqkubws wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:leaf-sketch"} {...others} />);
}

export default Component;
