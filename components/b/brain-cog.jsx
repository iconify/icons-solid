import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/v/vkgpxbblr.css';
import '../../css/p/poffq8b8a.css';
import '../../css/g/gh2cbgu8p.css';
import '../../css/v/vmm6pvb2n.css';
import '../../css/d/dit_a06mu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGGRAKoell" cx="7.34" cy="7.09" r="25.38" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="vkgpxbblr wm-shadow"/><path fill="url(#SVGGRAKoell)" class="poffq8b8a wm-k"/><path class="gh2cbgu8p wm-shine"/><path class="vmm6pvb2n wm-s"/><path class="dit_a06mu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:brain-cog"} {...others} />);
}

export default Component;
