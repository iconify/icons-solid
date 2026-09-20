import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucnfbmfrx.css';
import '../../css/k/k5227db7l.css';
import '../../css/j/jwg3u8mon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ucnfbmfrx"/><path class="k5227db7l"/><path class="jwg3u8mon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fog-bold"} {...others} />);
}

export default Component;
