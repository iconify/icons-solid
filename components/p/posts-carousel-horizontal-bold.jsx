import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iyqk6dbpw.css';
import '../../css/c/c-jivptzw.css';
import '../../css/v/vgvnd_kez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iyqk6dbpw"/><path class="c-jivptzw"/><path class="vgvnd_kez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-bold"} {...others} />);
}

export default Component;
