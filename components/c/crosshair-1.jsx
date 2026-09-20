import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnpjweblo.css';
import '../../css/h/h9vbj4blh.css';
import '../../css/k/kmgsmimva.css';
import '../../css/d/dv4-vebuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wnpjweblo"/><path class="h9vbj4blh"/><path class="kmgsmimva"/><path class="dv4-vebuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:crosshair-1"} {...others} />);
}

export default Component;
