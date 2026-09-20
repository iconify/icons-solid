import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmz20acxw.css';
import '../../css/o/owr337brf.css';
import '../../css/m/m8_c1sb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fmz20acxw"/><path class="owr337brf"/><path class="m8_c1sb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:staircase-down-2"} {...others} />);
}

export default Component;
