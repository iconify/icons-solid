import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj3898byv.css';
import '../../css/v/vlrbihbra.css';
import '../../css/p/piis-qmmh.css';
import '../../css/m/mrpsvib8v.css';
import '../../css/e/e4v6jpbkb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mj3898byv wm-k"/><path class="vlrbihbra wm-a"/><path class="piis-qmmh wm-shadow"/><path class="mrpsvib8v wm-k"/><path class="e4v6jpbkb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rotate-ccw-engrave"} {...others} />);
}

export default Component;
