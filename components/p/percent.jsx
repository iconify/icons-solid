import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jc0rlpwpy.css';
import '../../css/p/p8jx_hbic.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/b/bb8vnzh5z.css';
import '../../css/v/vnfkbvmnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="jc0rlpwpy"/><path class="p8jx_hbic wm-shine"/><path class="oqdxdpjwb wm-k"/><path class="bb8vnzh5z wm-a"/><path class="vnfkbvmnw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:percent"} {...others} />);
}

export default Component;
