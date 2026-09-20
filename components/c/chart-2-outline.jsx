import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fymmy6yxr.css';
import '../../css/q/qan4aub6p.css';
import '../../css/m/mr4vr-85q.css';
import '../../css/f/fzuu2xbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fymmy6yxr"/><path clip-rule="evenodd" class="qan4aub6p"/><path clip-rule="evenodd" class="mr4vr-85q"/><path class="fzuu2xbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-outline"} {...others} />);
}

export default Component;
