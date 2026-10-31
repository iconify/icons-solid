import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/ht7bm3bto.css';
import '../../css/v/vpe0ue3vn.css';
import '../../css/m/mexbxv5go.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ht7bm3bto"/><path class="vpe0ue3vn wm-k"/><path class="mexbxv5go wm-a"/><path class="vnfkbvmnw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:fence"} {...others} />);
}

export default Component;
