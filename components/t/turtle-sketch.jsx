import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g1-dnh7xo.css';
import '../../css/m/mdr1krqpu.css';
import '../../css/u/uaprxrdhx.css';
import '../../css/v/vs4f-zb2g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g1-dnh7xo"/><path class="mdr1krqpu wm-k"/><path class="uaprxrdhx"/><path class="vs4f-zb2g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:turtle-sketch"} {...others} />);
}

export default Component;
