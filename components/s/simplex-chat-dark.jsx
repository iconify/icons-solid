import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tocan3b9f.css';
import '../../css/g/gz6efibbd.css';
import '../../css/j/jfr2d6b2v.css';
import '../../css/r/rbkafffby.css';

const viewBox = {"width":34,"height":35};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tocan3b9f"/><path fill="url(#SVGRCnjddQO)" clip-rule="evenodd" class="gz6efibbd"/><defs><linearGradient id="SVGRCnjddQO" x1="12.84" x2="9.54" y1="-.68" y2="31.45" gradientUnits="userSpaceOnUse"><stop class="jfr2d6b2v"/><stop offset="1" class="rbkafffby"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:simplex-chat-dark"} {...others} />);
}

export default Component;
