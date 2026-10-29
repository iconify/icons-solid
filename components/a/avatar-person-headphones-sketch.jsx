import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vn64pd1yg.css';
import '../../css/w/whghrwqec.css';
import '../../css/s/shx_j6b-f.css';
import '../../css/g/gkoajyd-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vn64pd1yg wm-k"/><path class="whghrwqec wm-a"/><path class="shx_j6b-f wm-k"/><path class="gkoajyd-t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-headphones-sketch"} {...others} />);
}

export default Component;
