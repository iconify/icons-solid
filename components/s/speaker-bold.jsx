import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcj0avb-b.css';
import '../../css/o/o41m46bsm.css';
import '../../css/m/mlgahkksy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dcj0avb-b"/><path class="o41m46bsm"/><path clip-rule="evenodd" class="mlgahkksy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-bold"} {...others} />);
}

export default Component;
