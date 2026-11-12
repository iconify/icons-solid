import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru49qvb2s.css';
import '../../css/i/i6xqw31vr.css';
import '../../css/e/e_po1hivt.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG7e3avbKN" x1="13.9" x2="498.1" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="ru49qvb2s"/><stop offset="1" class="i6xqw31vr"/></linearGradient><path fill="url(#SVG7e3avbKN)" class="e_po1hivt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trek"} {...others} />);
}

export default Component;
