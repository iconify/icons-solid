import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/iqwhbwbjv.css';
import '../../css/c/cx-1p1bfe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="iqwhbwbjv"/><path class="cx-1p1bfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:3d-coordinate-axis"} {...others} />);
}

export default Component;
