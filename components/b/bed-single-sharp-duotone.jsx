import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh3btko3l.css';
import '../../css/d/dgy411bol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yh3btko3l"/><path clip-rule="evenodd" class="dgy411bol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-single-sharp-duotone"} {...others} />);
}

export default Component;
