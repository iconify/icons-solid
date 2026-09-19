import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5gdpl4fa.css';
import '../../css/i/if6xh6bvd.css';
import '../../css/y/yo7go3bgl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z5gdpl4fa"/><path class="if6xh6bvd"/><path class="yo7go3bgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fire"} {...others} />);
}

export default Component;
