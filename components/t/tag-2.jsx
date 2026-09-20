import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdr6qgb4m.css';
import '../../css/j/jdpsdzbyn.css';
import '../../css/m/m4yc2zbdc.css';
import '../../css/k/k4cg9fk4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdr6qgb4m"/><path class="jdpsdzbyn"/><path class="m4yc2zbdc"/><path class="k4cg9fk4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:tag-2"} {...others} />);
}

export default Component;
