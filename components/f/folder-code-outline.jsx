import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6d87qbmc.css';
import '../../css/i/iig8wobze.css';
import '../../css/w/wzr4wqbzt.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i6d87qbmc"/><path class="iig8wobze"/><path class="wzr4wqbzt"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-code-outline"} {...others} />);
}

export default Component;
