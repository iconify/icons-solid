import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/f/fekdtq-0p.css';
import '../../css/w/wf-z76efr.css';
import '../../css/t/t86h8p9eb.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/b/bbu5ribyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="fekdtq-0p"/><path class="wf-z76efr"/><path class="t86h8p9eb"/><path class="x9x2k2-hi"/><path class="bbu5ribyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-arrow-up"} {...others} />);
}

export default Component;
