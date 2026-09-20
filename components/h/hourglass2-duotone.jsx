import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3jp7g4ta.css';
import '../../css/o/ofygbeg8k.css';
import '../../css/x/xh2vlidti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m3jp7g4ta"/><path class="ofygbeg8k"/><path class="xh2vlidti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:hourglass2-duotone"} {...others} />);
}

export default Component;
