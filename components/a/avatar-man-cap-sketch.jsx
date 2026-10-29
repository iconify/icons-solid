import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a7ig7gbdc.css';
import '../../css/x/x5lnnybdj.css';
import '../../css/i/iy9d3l7td.css';
import '../../css/q/q0yce_brc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a7ig7gbdc wm-k"/><path class="wm-a x5lnnybdj"/><path class="iy9d3l7td wm-k"/><path class="q0yce_brc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-cap-sketch"} {...others} />);
}

export default Component;
