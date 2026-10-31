import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/l-87uqirc.css';
import '../../css/t/tvjwpgbps.css';
import '../../css/h/h9pnvpulh.css';
import '../../css/s/s-1ijqqzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGX9Gs3bmG" x1="10" x2="14" y1="3.02" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="l-87uqirc wm-k"/><path class="tvjwpgbps wm-deco"/><path fill="url(#SVGX9Gs3bmG)" class="h9pnvpulh wm-k"/><path class="s-1ijqqzq wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:a-large-small"} {...others} />);
}

export default Component;
