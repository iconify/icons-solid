import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rj04jfnia.css';
import '../../css/i/itvg1po0z.css';
import '../../css/v/vldf6k28c.css';
import '../../css/h/h6evcx0mf.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG3BhuQmFS" x1="201.489" x2="1224.465" y1="177.489" y2="-845.444" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="rj04jfnia"/><stop offset="1" class="itvg1po0z"/></linearGradient><path fill="url(#SVG3BhuQmFS)" class="vldf6k28c"/><path class="h6evcx0mf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-church-center"} {...others} />);
}

export default Component;
