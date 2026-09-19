import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/d9ptkfboc.css';
import '../../css/p/pui_g7baf.css';
import '../../css/y/yeotfbbou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="d9ptkfboc"/><path class="pui_g7baf"/><path class="yeotfbbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframes-solid"} {...others} />);
}

export default Component;
