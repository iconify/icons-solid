import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/s/s_nzm5b1c.css';
import '../../css/i/ib8-k9pvy.css';
import '../../css/z/z71_zvbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGyrVYjefD" cx="7.78" cy="6.62" r="24.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGyrVYjefD)" class="s_nzm5b1c wm-k"/><path class="ib8-k9pvy wm-deco"/><path class="wm-deco z71_zvbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:braces"} {...others} />);
}

export default Component;
