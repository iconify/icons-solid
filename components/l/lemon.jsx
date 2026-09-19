import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x187ccbsy.css';
import '../../css/d/dhpw3gbbv.css';
import '../../css/d/d0fmz0sri.css';
import '../../css/x/x7exasbge.css';
import '../../css/p/pd7cl8bml.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x187ccbsy"/><path class="dhpw3gbbv"/><path class="d0fmz0sri"/><path class="x7exasbge"/><path class="pd7cl8bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lemon"} {...others} />);
}

export default Component;
