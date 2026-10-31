import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/huh8l6n6o.css';
import '../../css/a/auz8mr7ns.css';
import '../../css/v/v96b5reqv.css';
import '../../css/o/oakofbbnz.css';
import '../../css/w/wkiew3b4s.css';
import '../../css/s/sy2qpacxh.css';
import '../../css/o/owd4yc9-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="huh8l6n6o wm-shadow"/><path class="auz8mr7ns"/><path class="v96b5reqv"/><path class="oakofbbnz"/><path class="wkiew3b4s"/><path class="sy2qpacxh"/><path class="owd4yc9-z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:filter-x"} {...others} />);
}

export default Component;
