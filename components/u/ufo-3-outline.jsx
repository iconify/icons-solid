import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nadiy9iqm.css';
import '../../css/h/huqlmoo_p.css';
import '../../css/c/cryfmzb_q.css';
import '../../css/m/mrqy8zbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nadiy9iqm"/><path class="huqlmoo_p"/><path class="cryfmzb_q"/><path clip-rule="evenodd" class="mrqy8zbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-outline"} {...others} />);
}

export default Component;
