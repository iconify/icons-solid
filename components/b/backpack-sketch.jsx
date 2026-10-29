import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/naz7nhbla.css';
import '../../css/q/qwyktibri.css';
import '../../css/o/onacwcrjs.css';
import '../../css/p/px7dfaclp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="naz7nhbla"/><path class="qwyktibri wm-a"/><path class="onacwcrjs wm-k"/><path class="px7dfaclp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:backpack-sketch"} {...others} />);
}

export default Component;
