import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dkzxnqbrb.css';
import '../../css/r/rn54dybwb.css';
import '../../css/k/kqufevifz.css';
import '../../css/m/m6ykkbbfn.css';
import '../../css/t/tp61zgbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dkzxnqbrb"/><path class="rn54dybwb wm-k"/><path class="kqufevifz wm-a"/><path class="m6ykkbbfn wm-k"/><path class="tp61zgbyw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-minus-sketch"} {...others} />);
}

export default Component;
