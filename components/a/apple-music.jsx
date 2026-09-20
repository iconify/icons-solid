import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcjni6bfe.css';
import '../../css/l/l1q0m9wzl.css';
import '../../css/i/if9mtwbmb.css';
import '../../css/x/xyzxunbkx.css';

const viewBox = {"width":361,"height":361};
const content = `<linearGradient id="SVG1t4kne3G" x1="180" x2="180" y1="358.605" y2="7.759" gradientUnits="userSpaceOnUse"><stop offset="0" class="rcjni6bfe"/><stop offset="1" class="l1q0m9wzl"/></linearGradient><path fill="url(#SVG1t4kne3G)" class="if9mtwbmb"/><path class="xyzxunbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apple-music"} {...others} />);
}

export default Component;
