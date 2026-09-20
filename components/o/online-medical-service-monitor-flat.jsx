import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vb2_m9s3x.css';
import '../../css/y/yrjrbwbwa.css';
import '../../css/l/liu_9vbqn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vb2_m9s3x"/><path clip-rule="evenodd" class="yrjrbwbwa"/><path class="liu_9vbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:online-medical-service-monitor-flat"} {...others} />);
}

export default Component;
