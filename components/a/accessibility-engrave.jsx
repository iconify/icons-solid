import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jo2m28qre.css';
import '../../css/r/rlut52b5u.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/j/j0qf33quz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jo2m28qre wm-k"/><path class="rlut52b5u wm-a"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="j0qf33quz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:accessibility-engrave"} {...others} />);
}

export default Component;
