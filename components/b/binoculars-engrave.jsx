import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pd-c8rb_b.css';
import '../../css/w/w_nj6nq5i.css';
import '../../css/g/gaam40bfx.css';
import '../../css/g/gdnuq8wfy.css';
import '../../css/g/g8_iol2hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pd-c8rb_b wm-k"/><path class="w_nj6nq5i wm-shadow"/><path class="gaam40bfx wm-k"/><path class="gdnuq8wfy wm-k"/><path class="g8_iol2hx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binoculars-engrave"} {...others} />);
}

export default Component;
