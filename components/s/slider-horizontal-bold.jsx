import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_5-cnc6s.css';
import '../../css/e/eewomobar.css';
import '../../css/g/gzjneqlby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d_5-cnc6s"/><path class="eewomobar"/><path class="gzjneqlby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-horizontal-bold"} {...others} />);
}

export default Component;
