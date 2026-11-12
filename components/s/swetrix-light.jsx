import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c98y_fk5b.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wsvgiff-m.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMrT7fbqd" x1="20.4" x2="398.5" y1="491.6" y2="113.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="c98y_fk5b"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGMrT7fbqd)" class="wsvgiff-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:swetrix-light"} {...others} />);
}

export default Component;
