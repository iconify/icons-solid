import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xojf8v49t.css';
import '../../css/k/kv0n7fx-i.css';
import '../../css/y/yi23eea4c.css';
import '../../css/t/tg-es2b-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xojf8v49t"/><path class="kv0n7fx-i wm-shadow"/><path class="wm-k yi23eea4c"/><path class="tg-es2b-k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-engrave"} {...others} />);
}

export default Component;
