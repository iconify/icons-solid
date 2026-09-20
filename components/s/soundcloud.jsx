import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbwifro-m.css';
import '../../css/j/jw0j2zbvf.css';
import '../../css/a/ac4vxwops.css';
import '../../css/f/fnrvcab5i.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGPTHGBctM" x1="-3025.809" x2="1391.344" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="nbwifro-m"/><stop offset=".713" class="jw0j2zbvf"/><stop offset="1" class="ac4vxwops"/></linearGradient><path fill="url(#SVGPTHGBctM)" class="fnrvcab5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:soundcloud"} {...others} />);
}

export default Component;
