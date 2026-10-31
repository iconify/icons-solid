import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/m/mix2uij5t.css';
import '../../css/z/zyh2o625n.css';
import '../../css/s/s3q8-lbsj.css';
import '../../css/w/wgbi6q9oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVG1wEKYg3H" cx="7.42" cy="6.85" r="25.54" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="mix2uij5t wm-shadow"/><path fill="url(#SVG1wEKYg3H)" class="wm-k zyh2o625n"/><path class="s3q8-lbsj wm-shine"/><path class="wgbi6q9oa wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:house-plus"} {...others} />);
}

export default Component;
