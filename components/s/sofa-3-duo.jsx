import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8ryl_bho.css';
import '../../css/h/hjysc2jjf.css';
import '../../css/p/p84xvje3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8ryl_bho"/><path class="hjysc2jjf"/><path class="p84xvje3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sofa-3-duo"} {...others} />);
}

export default Component;
