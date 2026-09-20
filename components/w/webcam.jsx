import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnparwb4l.css';
import '../../css/u/ug41in33z.css';
import '../../css/d/dwv9pzbvo.css';
import '../../css/v/vy222h15i.css';
import '../../css/l/l3m-pzb_g.css';
import '../../css/k/klmhhzzlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vnparwb4l"/><path class="ug41in33z"/><path class="dwv9pzbvo"/><path class="vy222h15i"/><path class="l3m-pzb_g"/><path class="klmhhzzlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:webcam"} {...others} />);
}

export default Component;
