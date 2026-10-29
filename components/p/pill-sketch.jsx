import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y3rzw4quo.css';
import '../../css/b/bt8z4zwkv.css';
import '../../css/w/w6cbyybob.css';
import '../../css/v/vf78t_b8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y3rzw4quo"/><path class="bt8z4zwkv wm-a"/><path class="w6cbyybob wm-k"/><path class="vf78t_b8x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-sketch"} {...others} />);
}

export default Component;
