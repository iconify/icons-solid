import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cgzrd6bda.css';
import '../../css/v/vk17_kbpb.css';
import '../../css/k/kwicdkbyg.css';
import '../../css/d/dy6f-b0he.css';
import '../../css/d/djl3n2rtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cgzrd6bda wm-k"/><path class="vk17_kbpb wm-a"/><path class="kwicdkbyg wm-shadow"/><path class="dy6f-b0he wm-k"/><path class="djl3n2rtw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cup-soda-engrave"} {...others} />);
}

export default Component;
