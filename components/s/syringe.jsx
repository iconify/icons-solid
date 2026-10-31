import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hjw5xsb4u.css';
import '../../css/d/dl3jdm16l.css';
import '../../css/y/y5w-jqbee.css';
import '../../css/k/k4byxhb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hjw5xsb4u wm-shadow"/><path class="dl3jdm16l"/><path class="y5w-jqbee"/><path class="k4byxhb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:syringe"} {...others} />);
}

export default Component;
