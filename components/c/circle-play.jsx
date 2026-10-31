import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/q/qhyf9kb5g.css';
import '../../css/s/suktsu29n.css';
import '../../css/i/ido7ll9ev.css';
import '../../css/i/i8uex-bic.css';
import '../../css/x/x_a37lbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="qhyf9kb5g"/><path class="suktsu29n"/><path class="ido7ll9ev"/><path class="i8uex-bic"/><path class="x_a37lbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-play"} {...others} />);
}

export default Component;
