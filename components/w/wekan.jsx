import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0iwd3jij.css';
import '../../css/v/vi2snt3cv.css';
import '../../css/w/w_ud-leuq.css';
import '../../css/u/uw3mel2bt.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG02sCvb3H" x1="0" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="z0iwd3jij"/><stop offset=".371" class="vi2snt3cv"/><stop offset="1" class="w_ud-leuq"/></linearGradient><path fill="url(#SVG02sCvb3H)" class="uw3mel2bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wekan"} {...others} />);
}

export default Component;
