import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/as3ljndnp.css';
import '../../css/o/ohbfxfn1p.css';
import '../../css/h/hvkppq0gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSjCfadjI" x1="10.25" x2="14.25" y1="3.51" y2="20.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="as3ljndnp wm-k"/><path class="ohbfxfn1p wm-deco"/><path fill="url(#SVGSjCfadjI)" class="hvkppq0gl wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:code-xml"} {...others} />);
}

export default Component;
