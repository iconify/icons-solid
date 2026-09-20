import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx32gdm7x.css';
import '../../css/u/uxbmyhwdw.css';
import '../../css/h/hokpedb6q.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG7e6LeAoq" x1="256" x2="256" y1="514" y2="28.262" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVG7e6LeAoq)" class="uxbmyhwdw"/><path class="hokpedb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grimmory-dark"} {...others} />);
}

export default Component;
