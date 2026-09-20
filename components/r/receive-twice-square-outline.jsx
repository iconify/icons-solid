import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtilw0b3x.css';
import '../../css/u/ugnfnu3gs.css';
import '../../css/t/t8jrtq-ro.css';
import '../../css/m/mopqlzbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mtilw0b3x"/><path class="ugnfnu3gs"/><path class="t8jrtq-ro"/><path clip-rule="evenodd" class="mopqlzbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-outline"} {...others} />);
}

export default Component;
