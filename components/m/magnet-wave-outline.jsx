import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhorp5vwr.css';
import '../../css/d/d6uogubqg.css';
import '../../css/v/vi49wmb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rhorp5vwr"/><path class="d6uogubqg"/><path class="vi49wmb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-wave-outline"} {...others} />);
}

export default Component;
