import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z86srdbpn.css';
import '../../css/z/z2i7s751c.css';
import '../../css/w/w5i3j0ajh.css';
import '../../css/z/ziihwcc0a.css';
import '../../css/t/tzha2aczg.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG2Deusdca" x1="-25.047" x2="537.047" y1="93.737" y2="418.263" gradientUnits="userSpaceOnUse"><stop offset="0" class="z86srdbpn"/><stop offset="1" class="z2i7s751c"/></linearGradient><path fill="url(#SVG2Deusdca)" class="w5i3j0ajh"/><path class="ziihwcc0a"/><path class="tzha2aczg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:strava"} {...others} />);
}

export default Component;
