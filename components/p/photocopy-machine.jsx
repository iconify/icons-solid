import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mznr8bc4b.css';
import '../../css/y/yrkhz5ymg.css';
import '../../css/m/mtpmq_-6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mznr8bc4b"/><path class="yrkhz5ymg"/><path class="mtpmq_-6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:photocopy-machine"} {...others} />);
}

export default Component;
