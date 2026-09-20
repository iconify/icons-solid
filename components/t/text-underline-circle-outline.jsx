import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7wl2l2ca.css';
import '../../css/r/rh4jo1b5o.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="t7wl2l2ca"/><path class="rh4jo1b5o"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-circle-outline"} {...others} />);
}

export default Component;
