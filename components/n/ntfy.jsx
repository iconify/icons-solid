import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-txusbyn.css';
import '../../css/i/i43qr5u2f.css';
import '../../css/i/i04a-1b-v.css';
import '../../css/q/qh-dmzbvl.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGDHPJYcJZ" x1="21.759" x2="445.247" y1="74.359" y2="393.379" gradientUnits="userSpaceOnUse"><stop offset="0" class="z-txusbyn"/><stop offset="1" class="i43qr5u2f"/></linearGradient><path fill="url(#SVGDHPJYcJZ)" class="i04a-1b-v"/><path class="qh-dmzbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ntfy"} {...others} />);
}

export default Component;
