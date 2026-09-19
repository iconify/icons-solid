import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hjcuwvbjp.css';
import '../../css/t/txx5sc6uz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hjcuwvbjp"/><path class="txx5sc6uz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-rotation-up"} {...others} />);
}

export default Component;
