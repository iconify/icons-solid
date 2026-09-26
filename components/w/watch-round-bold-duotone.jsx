import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmtbiq4iv.css';
import '../../css/s/s_7f1y7-k.css';
import '../../css/r/re365kb-x.css';
import '../../css/v/viki5hbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mmtbiq4iv"/><path class="s_7f1y7-k"/><path class="re365kb-x"/><path class="viki5hbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-bold-duotone"} {...others} />);
}

export default Component;
