import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9a1124li.css';
import '../../css/s/s8batg03y.css';
import '../../css/y/yj_5s8bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x9a1124li"/><path class="s8batg03y"/><path clip-rule="evenodd" class="yj_5s8bsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-outline"} {...others} />);
}

export default Component;
