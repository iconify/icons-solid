import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tojhk50px.css';
import '../../css/g/gdi71gd5j.css';
import '../../css/g/gk_jp9uss.css';
import '../../css/r/r_z17l3ee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tojhk50px"/><path class="gdi71gd5j wm-a"/><path class="gk_jp9uss wm-k"/><path class="r_z17l3ee wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:magnet-sketch"} {...others} />);
}

export default Component;
