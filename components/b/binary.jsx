import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/o/o4v-ltaym.css';
import '../../css/r/r2bmksbnq.css';
import '../../css/v/vh8k82bxx.css';
import '../../css/o/o02assbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGs2M12OkF" x1="9.75" x2="13.75" y1="3.51" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="o4v-ltaym wm-k"/><path class="r2bmksbnq wm-deco"/><path fill="url(#SVGs2M12OkF)" class="vh8k82bxx wm-k"/><path class="o02assbsy wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:binary"} {...others} />);
}

export default Component;
