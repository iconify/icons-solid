import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qck3nxp6h.css';
import '../../css/v/vzdihpb0v.css';
import '../../css/u/ude15obok.css';
import '../../css/c/cc4eftjaf.css';
import '../../css/x/xlroajblq.css';
import '../../css/h/h2diykgsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qck3nxp6h wm-shadow"/><path class="vzdihpb0v"/><path class="ude15obok"/><path class="cc4eftjaf"/><path class="xlroajblq"/><path class="h2diykgsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hammer"} {...others} />);
}

export default Component;
