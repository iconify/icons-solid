import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xw_l8jjfs.css';
import '../../css/s/saqexskah.css';
import '../../css/o/oah_nmb4a.css';
import '../../css/r/rumhxo9iv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xw_l8jjfs"/><path class="saqexskah wm-k"/><path class="oah_nmb4a wm-k"/><path class="rumhxo9iv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-lightning-sketch"} {...others} />);
}

export default Component;
