import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mv8lge-yg.css';
import '../../css/p/p7h9-tb5r.css';
import '../../css/f/f6n0z_b1k.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/zpoereb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mv8lge-yg wm-k"/><path class="p7h9-tb5r wm-a"/><path class="f6n0z_b1k wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-a zpoereb3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:aperture-engrave"} {...others} />);
}

export default Component;
