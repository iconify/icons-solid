import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcrc2fbdg.css';
import '../../css/i/iswm-kbei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pcrc2fbdg"/><path clip-rule="evenodd" class="iswm-kbei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:user-avatar"} {...others} />);
}

export default Component;
