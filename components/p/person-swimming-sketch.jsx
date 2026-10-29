import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j62xyjbvv.css';
import '../../css/u/u4mr4cc1c.css';
import '../../css/y/yw4actbtc.css';
import '../../css/e/evlq5sb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j62xyjbvv wm-k"/><path class="u4mr4cc1c wm-a"/><path class="wm-k yw4actbtc"/><path class="evlq5sb4r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-swimming-sketch"} {...others} />);
}

export default Component;
