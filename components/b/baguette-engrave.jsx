import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/di6-n2bva.css';
import '../../css/r/ritfql38f.css';
import '../../css/w/wevkxlbtt.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="di6-n2bva wm-k"/><path class="ritfql38f wm-shadow"/><path class="wevkxlbtt wm-k"/><path class="f545reb7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baguette-engrave"} {...others} />);
}

export default Component;
