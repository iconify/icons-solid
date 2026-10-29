import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nca9-y1ca.css';
import '../../css/g/gs0z3j49t.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/z/zl8syfbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nca9-y1ca wm-k"/><path class="gs0z3j49t wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="hbi8hhkfx wm-k"/><path class="wm-a zl8syfbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:donut-engrave"} {...others} />);
}

export default Component;
