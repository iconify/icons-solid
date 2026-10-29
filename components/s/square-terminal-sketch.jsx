import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yqtey0bii.css';
import '../../css/o/obyrvxbrs.css';
import '../../css/e/en_6zhbjs.css';
import '../../css/a/aod7xpoai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="yqtey0bii"/><path class="obyrvxbrs wm-a"/><path class="en_6zhbjs wm-k"/><path class="aod7xpoai wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-terminal-sketch"} {...others} />);
}

export default Component;
