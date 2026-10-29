import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lg_nejb3d.css';
import '../../css/x/xnz7p-bku.css';
import '../../css/h/hbuj9d8ju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lg_nejb3d wm-k"/><path class="wm-k xnz7p-bku"/><path class="hbuj9d8ju wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-front-sketch"} {...others} />);
}

export default Component;
