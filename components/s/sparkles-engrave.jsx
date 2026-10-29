import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z56fic-5s.css';
import '../../css/v/vg8lvr9zy.css';
import '../../css/s/smrkqr1kn.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z56fic-5s"/><path class="vg8lvr9zy wm-a"/><path class="smrkqr1kn wm-shadow"/><path class="gapblccgm wm-k"/><path class="d-i86qbmd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkles-engrave"} {...others} />);
}

export default Component;
