import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4qnijfkm.css';
import '../../css/s/stui2mbih.css';
import '../../css/s/saub33b8b.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG68haccIh" x1="483.335" x2="741.555" y1="98.231" y2="98.231" gradientTransform="matrix(.75 0 0 -.75 -178.287 329.673)" gradientUnits="userSpaceOnUse"><stop offset="0" class="m4qnijfkm"/><stop offset="1" class="stui2mbih"/></linearGradient><path fill="url(#SVG68haccIh)" class="saub33b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:skylite-ux"} {...others} />);
}

export default Component;
