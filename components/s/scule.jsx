import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d75nx_b4s.css';
import '../../css/v/vlsyhihxd.css';
import '../../css/m/m14u_276j.css';
import '../../css/k/kt-odbcjh.css';
import '../../css/g/gas-hsbbl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d75nx_b4s"/><path class="vlsyhihxd"/><path class="m14u_276j"/><path class="kt-odbcjh"/><path class="gas-hsbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:scule"} {...others} />);
}

export default Component;
