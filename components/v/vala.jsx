import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex-9i5bwz.css';
import '../../css/t/t5p8as3wn.css';
import '../../css/k/kdecpsgdz.css';
import '../../css/v/vv0uqb1_a.css';
import '../../css/c/caqglacci.css';
import '../../css/p/p-qsk_moi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect fill="url(#SVGBL4vIecK)" class="ex-9i5bwz"/><path class="t5p8as3wn"/><path class="kdecpsgdz"/><path class="vv0uqb1_a"/><defs><linearGradient id="SVGBL4vIecK" x1="128" x2="128" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="caqglacci"/><stop offset="1" class="p-qsk_moi"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:vala"} {...others} />);
}

export default Component;
