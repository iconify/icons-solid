import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wejio6ivs.css';
import '../../css/h/hq38tccqi.css';
import '../../css/y/yjuie1_qo.css';
import '../../css/k/k_1g644cr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wejio6ivs"/><path class="hq38tccqi wm-a"/><path class="wm-k yjuie1_qo"/><path class="k_1g644cr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-horns-sketch"} {...others} />);
}

export default Component;
