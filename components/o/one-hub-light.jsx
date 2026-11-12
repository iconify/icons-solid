import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/l/litwb--2s.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGgIkDrc4U" x1="256" x2="256" y1="368.3" y2="143.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="f-c80ro0i"/></linearGradient><path fill="url(#SVGgIkDrc4U)" class="litwb--2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:one-hub-light"} {...others} />);
}

export default Component;
