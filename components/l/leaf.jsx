import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fhgumrq_o.css';
import '../../css/t/t8xmu-wgf.css';
import '../../css/g/gzt3b2bzo.css';
import '../../css/g/gfnr4dguk.css';
import '../../css/f/fdj9s690k.css';
import '../../css/s/s11tbibfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fhgumrq_o wm-shadow"/><path class="t8xmu-wgf"/><path class="gzt3b2bzo"/><path class="gfnr4dguk"/><path class="fdj9s690k"/><path class="s11tbibfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:leaf"} {...others} />);
}

export default Component;
