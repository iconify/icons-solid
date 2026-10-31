import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/s/s3rylhbnk.css';
import '../../css/d/d0lun0b7e.css';
import '../../css/z/zbpdkgzrp.css';
import '../../css/y/yfgdcjktp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGnreWddSd" cx="7.64" cy="7.13" r="24.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="s3rylhbnk wm-shadow"/><path fill="url(#SVGnreWddSd)" class="d0lun0b7e wm-k"/><path class="wm-shine zbpdkgzrp"/><path class="wm-s yfgdcjktp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:heart-plus"} {...others} />);
}

export default Component;
