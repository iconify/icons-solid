import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwkco47_d.css';
import '../../css/k/k89hfgloi.css';
import '../../css/z/zoiwa9bvm.css';
import '../../css/g/g0w_m7lbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kwkco47_d"/><path class="k89hfgloi wm-a"/><path class="wm-k zoiwa9bvm"/><path class="g0w_m7lbe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coins-sketch"} {...others} />);
}

export default Component;
