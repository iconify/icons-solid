import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h6-v3pfiv.css';
import '../../css/h/hkeb9lbtu.css';
import '../../css/j/jsn461bcb.css';
import '../../css/d/d59m1yvcb.css';
import '../../css/e/e--mbmb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h6-v3pfiv wm-k"/><path class="hkeb9lbtu wm-a"/><path class="jsn461bcb wm-shadow"/><path class="d59m1yvcb wm-k"/><path class="e--mbmb3x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signpost-engrave"} {...others} />);
}

export default Component;
