import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akqouxm0s.css';
import '../../css/a/aedbiubbd.css';
import '../../css/c/c2666qbyo.css';
import '../../css/q/qh6qg07ln.css';
import '../../css/j/jajpddrxu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="akqouxm0s"/><linearGradient id="SVGN64GfetH" x1="61.827" x2="447.193" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="aedbiubbd"/><stop offset=".474" class="c2666qbyo"/><stop offset="1" class="qh6qg07ln"/></linearGradient><path fill="url(#SVGN64GfetH)" class="jajpddrxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plexamp"} {...others} />);
}

export default Component;
