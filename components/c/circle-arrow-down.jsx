import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/l/l2iv1ebep.css';
import '../../css/i/iziviib_t.css';
import '../../css/n/nup8enbjy.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/d/dlvl4ql_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="l2iv1ebep"/><path class="iziviib_t"/><path class="nup8enbjy"/><path class="x9x2k2-hi"/><path class="dlvl4ql_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:circle-arrow-down"} {...others} />);
}

export default Component;
