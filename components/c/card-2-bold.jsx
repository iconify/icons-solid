import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsir_bc4l.css';
import '../../css/t/t_n5ogbuh.css';
import '../../css/h/h18qvtb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wsir_bc4l"/><path clip-rule="evenodd" class="t_n5ogbuh"/><path class="h18qvtb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-2-bold"} {...others} />);
}

export default Component;
