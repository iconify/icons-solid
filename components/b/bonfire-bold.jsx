import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d68ervb4k.css';
import '../../css/r/rtpvlhbro.css';
import '../../css/y/y7x24zb6u.css';
import '../../css/m/m-br5bbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d68ervb4k"/><path class="rtpvlhbro"/><path class="y7x24zb6u"/><path clip-rule="evenodd" class="m-br5bbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bonfire-bold"} {...others} />);
}

export default Component;
