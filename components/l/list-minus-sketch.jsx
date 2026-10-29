import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yhi9251_i.css';
import '../../css/h/h83iirgtj.css';
import '../../css/n/n4lar3b0l.css';
import '../../css/m/myn9_tb9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yhi9251_i"/><path class="h83iirgtj wm-s"/><path class="n4lar3b0l wm-k"/><path class="myn9_tb9s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-minus-sketch"} {...others} />);
}

export default Component;
