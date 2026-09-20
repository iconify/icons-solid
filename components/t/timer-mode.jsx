import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e16t_xnso.css';
import '../../css/y/y5rz4bcgu.css';
import '../../css/r/rg-eymbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e16t_xnso"/><path class="y5rz4bcgu"/><path class="rg-eymbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:timer-mode"} {...others} />);
}

export default Component;
