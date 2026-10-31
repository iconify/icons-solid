import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/remm99byw.css';
import '../../css/t/tx8onvulw.css';
import '../../css/x/x2ydylbgr.css';
import '../../css/f/fpt8y7b2h.css';
import '../../css/o/o4y1xcbsa.css';
import '../../css/s/sfjtq6vjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="remm99byw wm-shadow"/><path class="tx8onvulw"/><path class="x2ydylbgr"/><path class="fpt8y7b2h"/><path class="o4y1xcbsa"/><path class="sfjtq6vjf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-download"} {...others} />);
}

export default Component;
