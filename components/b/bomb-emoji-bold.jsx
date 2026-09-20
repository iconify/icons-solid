import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rn08x5brb.css';
import '../../css/p/pk2i_1x1h.css';
import '../../css/n/ngo4x72kh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rn08x5brb"/><path clip-rule="evenodd" class="pk2i_1x1h"/><path class="ngo4x72kh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-emoji-bold"} {...others} />);
}

export default Component;
