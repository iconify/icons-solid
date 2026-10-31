import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m29432y_i.css';
import '../../css/l/llp865ckr.css';
import '../../css/c/c50pgs10y.css';
import '../../css/w/wep5oacvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="m29432y_i wm-shadow"/><path class="llp865ckr wm-shadow"/><path class="c50pgs10y"/><path class="wep5oacvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:baguette"} {...others} />);
}

export default Component;
