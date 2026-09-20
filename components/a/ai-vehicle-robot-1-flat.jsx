import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/frqcf-b7d.css';
import '../../css/p/pzcucr26s.css';
import '../../css/w/wv2stibew.css';
import '../../css/o/oweceybem.css';
import '../../css/d/d-w5pwneq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="frqcf-b7d"/><path clip-rule="evenodd" class="pzcucr26s"/><path class="wv2stibew"/><path clip-rule="evenodd" class="oweceybem"/><path clip-rule="evenodd" class="d-w5pwneq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ai-vehicle-robot-1-flat"} {...others} />);
}

export default Component;
