import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvk5q1f0x.css';
import '../../css/x/xlmfdgbol.css';
import '../../css/y/yyeasgwwc.css';
import '../../css/h/h65e0tmly.css';
import '../../css/s/s53tgbb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qvk5q1f0x wm-k"/><path class="wm-a xlmfdgbol"/><path class="wm-shadow yyeasgwwc"/><path class="h65e0tmly wm-k"/><path class="s53tgbb5w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:split-engrave"} {...others} />);
}

export default Component;
