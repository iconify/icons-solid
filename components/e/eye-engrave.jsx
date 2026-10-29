import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qdycs8m8j.css';
import '../../css/o/o409egb8b.css';
import '../../css/o/oqf382uiz.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qdycs8m8j wm-k"/><path class="o409egb8b wm-shadow"/><path class="oqf382uiz wm-k"/><path class="hbi8hhkfx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-engrave"} {...others} />);
}

export default Component;
