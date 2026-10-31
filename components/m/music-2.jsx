import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/csmpwqo2n.css';
import '../../css/w/w083kbw9o.css';
import '../../css/n/nygk_w2nr.css';
import '../../css/m/m89w97j4w.css';
import '../../css/u/uq0g5dbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="csmpwqo2n wm-shadow"/><path class="w083kbw9o wm-shadow"/><path class="nygk_w2nr"/><path class="m89w97j4w"/><path class="uq0g5dbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:music-2"} {...others} />);
}

export default Component;
