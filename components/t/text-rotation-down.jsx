import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hjcuwvbjp.css';
import '../../css/d/dyte66b2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hjcuwvbjp"/><path class="dyte66b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-rotation-down"} {...others} />);
}

export default Component;
