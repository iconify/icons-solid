import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f4abdvb7l.css';
import '../../css/i/i980sbb1t.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yd398tbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f4abdvb7l"/><path class="i980sbb1t wm-shadow"/><path class="yw4fz_b6b"/><path class="yd398tbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-circle-engrave"} {...others} />);
}

export default Component;
