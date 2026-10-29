import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pc5ui8bts.css';
import '../../css/t/t-1pbabqs.css';
import '../../css/d/du7h3-swe.css';
import '../../css/y/yvgsujbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pc5ui8bts wm-k"/><path class="t-1pbabqs wm-k"/><path class="du7h3-swe wm-a"/><path class="wm-a yvgsujbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:x-circle-sketch"} {...others} />);
}

export default Component;
