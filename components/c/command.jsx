import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/a1c9dvwmh.css';
import '../../css/g/ggbt6nsbh.css';
import '../../css/z/zit2yk56f.css';
import '../../css/y/yf71ejbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGM9G60cik" x1="10" x2="14" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="a1c9dvwmh wm-k"/><path class="ggbt6nsbh wm-deco"/><path fill="url(#SVGM9G60cik)" class="wm-k zit2yk56f"/><path class="wm-shadow yf71ejbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:command"} {...others} />);
}

export default Component;
