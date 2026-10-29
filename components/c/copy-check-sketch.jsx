import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wrzg7sb4i.css';
import '../../css/j/j7rx7-6xl.css';
import '../../css/m/muiqo2blt.css';
import '../../css/n/n0z0dgety.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wrzg7sb4i"/><path class="j7rx7-6xl wm-a"/><path class="muiqo2blt wm-k"/><path class="n0z0dgety wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:copy-check-sketch"} {...others} />);
}

export default Component;
