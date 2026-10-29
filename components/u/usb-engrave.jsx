import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g4rq9cb4b.css';
import '../../css/h/hiqgl-xto.css';
import '../../css/i/ialz71b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g4rq9cb4b"/><path class="hiqgl-xto wm-shadow"/><path class="ialz71b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:usb-engrave"} {...others} />);
}

export default Component;
