import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4nyqcchx.css';
import '../../css/w/wa2lq1bmf.css';
import '../../css/j/jje4tjgwk.css';
import '../../css/d/dluc55baa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d4nyqcchx"/><path class="wa2lq1bmf wm-a"/><path class="jje4tjgwk wm-k"/><path class="dluc55baa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-rain-wind-sketch"} {...others} />);
}

export default Component;
