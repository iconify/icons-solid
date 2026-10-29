import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8u-xw6ko.css';
import '../../css/m/msg-wubhq.css';
import '../../css/w/w9ylbrb7f.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/n/nuq9sybcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p8u-xw6ko wm-k"/><path class="msg-wubhq wm-a"/><path class="w9ylbrb7f wm-shadow"/><path class="m6i-bjqet wm-k"/><path class="nuq9sybcn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indent-decrease-engrave"} {...others} />);
}

export default Component;
