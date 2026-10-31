import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/e/edo86bb3h.css';
import '../../css/s/s93eihl1p.css';
import '../../css/a/aafywpkqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGoUoNHduM" cx="7.86" cy="6.89" r="23.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="edo86bb3h wm-shadow"/><path fill="url(#SVGoUoNHduM)" class="s93eihl1p wm-k"/><path class="aafywpkqt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:avatar-fox"} {...others} />);
}

export default Component;
