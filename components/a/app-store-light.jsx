import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/udnwifidc.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGAG1fNexy" x1="256" x2="256" y1="-.7" y2="511.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGAG1fNexy)" class="udnwifidc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:app-store-light"} {...others} />);
}

export default Component;
