import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8-uq6b_e.css';
import '../../css/e/e17hls0jt.css';
import '../../css/y/yrx2zbf-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g8-uq6b_e"/><path class="e17hls0jt"/><path class="yrx2zbf-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-round-bold"} {...others} />);
}

export default Component;
