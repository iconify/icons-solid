import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pj4w296cn.css';
import '../../css/l/l1vadobod.css';
import '../../css/v/vw6k31boc.css';
import '../../css/o/oubua5bfb.css';
import '../../css/r/r4sn81cyt.css';
import '../../css/q/qyjic00ok.css';
import '../../css/j/jftfw_bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pj4w296cn"/><path class="l1vadobod wm-k"/><path class="vw6k31boc wm-a"/><path class="oubua5bfb wm-s"/><path class="r4sn81cyt wm-k"/><path class="qyjic00ok wm-a"/><path class="jftfw_bzx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-sparkles-sketch"} {...others} />);
}

export default Component;
