import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ik1oxmbfh.css';
import '../../css/k/ku5p8_kxi.css';
import '../../css/h/h7xnus5-e.css';
import '../../css/u/unefcsbmw.css';
import '../../css/a/anua2ob4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ik1oxmbfh wm-k"/><path class="ku5p8_kxi wm-shadow"/><path class="h7xnus5-e wm-k"/><path class="unefcsbmw wm-k"/><path class="anua2ob4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch-engrave"} {...others} />);
}

export default Component;
