import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lfcmlbvrc.css';
import '../../css/m/mboxxfb9b.css';
import '../../css/e/esaiihsdv.css';
import '../../css/v/vqk9ftbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lfcmlbvrc wm-k"/><path class="mboxxfb9b wm-a"/><path class="esaiihsdv wm-k"/><path class="vqk9ftbxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lollipop-sketch"} {...others} />);
}

export default Component;
