import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i9b33_b1k.css';
import '../../css/u/u6r1a3yei.css';
import '../../css/m/moe4lz8su.css';
import '../../css/a/azaw88ucy.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/p/pu6dnmbwe.css';
import '../../css/v/v61f6f-xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i9b33_b1k wm-k"/><path class="u6r1a3yei wm-a"/><path class="moe4lz8su wm-shadow"/><path class="azaw88ucy wm-k"/><path class="d3y9mw6db wm-k"/><path class="pu6dnmbwe wm-a"/><path class="v61f6f-xq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-afro-engrave"} {...others} />);
}

export default Component;
