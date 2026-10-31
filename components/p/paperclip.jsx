import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wx30shbzq.css';
import '../../css/u/uv3ne8bbe.css';
import '../../css/r/r88ywobib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYIS6nWMW" x1="9.94" x2="13.94" y1="3.51" y2="20.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k wx30shbzq"/><path class="uv3ne8bbe wm-deco"/><path fill="url(#SVGYIS6nWMW)" class="r88ywobib wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:paperclip"} {...others} />);
}

export default Component;
