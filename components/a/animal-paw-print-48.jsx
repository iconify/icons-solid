import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4cnoabpt.css';
import '../../css/f/fwjaxubpm.css';
import '../../css/h/h3rixiekm.css';
import '../../css/h/h32uy_wuf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGv7PqEecP)" class="f4cnoabpt"/><path fill="url(#SVGXzjAkerA)" class="fwjaxubpm"/><defs><radialGradient id="SVGXzjAkerA" cx="0" cy="0" r="1" gradientTransform="matrix(0 -21.8571 33.6 0 25.167 24.214)" gradientUnits="userSpaceOnUse"><stop class="h3rixiekm"/><stop offset="1" class="h32uy_wuf"/></radialGradient><linearGradient id="SVGv7PqEecP" x1="16.659" x2="26.532" y1="22.925" y2="42.991" gradientUnits="userSpaceOnUse"><stop offset=".125" class="h32uy_wuf"/><stop offset="1" class="h3rixiekm"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:animal-paw-print-48"} {...others} />);
}

export default Component;
