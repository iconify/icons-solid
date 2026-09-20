import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_oulcbic.css';
import '../../css/h/h29r2ibir.css';
import '../../css/r/r-g2wpb4d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g_oulcbic"/><path class="h29r2ibir"/><path class="r-g2wpb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:candy-cane"} {...others} />);
}

export default Component;
