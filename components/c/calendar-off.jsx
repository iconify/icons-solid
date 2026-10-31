import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yv1mx3gtc.css';
import '../../css/a/ao3jr1bue.css';
import '../../css/u/ux0m3dede.css';
import '../../css/z/z1gmr9wnl.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yv1mx3gtc"/><path class="ao3jr1bue wm-shadow"/><path class="ux0m3dede"/><path class="z1gmr9wnl"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:calendar-off"} {...others} />);
}

export default Component;
