import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mv13hkb7j.css';
import '../../css/a/apqyakjsb.css';
import '../../css/o/oqburxzbi.css';
import '../../css/r/rr8yufi7o.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mv13hkb7j wm-shadow"/><path class="apqyakjsb wm-shadow"/><path class="oqburxzbi"/><path class="rr8yufi7o"/><path class="vvx5zcbvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:eye-off"} {...others} />);
}

export default Component;
