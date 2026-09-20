import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/f-c80ro0i.css';
import '../../css/x/xjlwq1r6x.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGvQQ4lbvu" x1="256" x2="256" y1="368.276" y2="143.724" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="f-c80ro0i"/></linearGradient><path fill="url(#SVGvQQ4lbvu)" class="xjlwq1r6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:one-hub-light"} {...others} />);
}

export default Component;
