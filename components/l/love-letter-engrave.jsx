import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w3rngib8b.css';
import '../../css/c/cdu43zb6j.css';
import '../../css/d/dunzu781y.css';
import '../../css/j/jffir3tnu.css';
import '../../css/s/sx4h3cbfw.css';
import '../../css/r/r8_j-9bks.css';
import '../../css/z/zr33d1b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w3rngib8b wm-k"/><path class="cdu43zb6j wm-a"/><path class="dunzu781y wm-shadow"/><path class="jffir3tnu wm-k"/><path class="sx4h3cbfw wm-a"/><path class="r8_j-9bks wm-a"/><path class="wm-s zr33d1b2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-letter-engrave"} {...others} />);
}

export default Component;
