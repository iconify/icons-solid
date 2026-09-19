import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/q/qg8ed74ug.css';
import '../../css/f/flkqk9ded.css';
import '../../css/y/yp3_hqbsq.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><path class="qg8ed74ug"/><path class="flkqk9ded"/><path class="yp3_hqbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sy"} {...others} />);
}

export default Component;
