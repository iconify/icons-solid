import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd7i7tujc.css';
import '../../css/h/hllqu3y3o.css';
import '../../css/c/cam26hb3e.css';
import '../../css/o/olzj25b_f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dd7i7tujc"/><path class="hllqu3y3o"/><path class="cam26hb3e"/><path class="olzj25b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fireworks-rocket"} {...others} />);
}

export default Component;
