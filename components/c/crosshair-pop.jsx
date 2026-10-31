import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/g/gs-7gyb0v.css';
import '../../css/s/sbnjbacqk.css';
import '../../css/t/t_2f2l7rx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="gs-7gyb0v"/><path class="sbnjbacqk"/><path class="t_2f2l7rx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:crosshair-pop"} {...others} />);
}

export default Component;
