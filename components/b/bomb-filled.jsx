import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pok33xboe.css';
import '../../css/l/lby5olvrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pok33xboe"/><path class="lby5olvrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bomb-filled"} {...others} />);
}

export default Component;
