import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpomyibzb.css';
import '../../css/q/q5txpcciu.css';
import '../../css/w/wumnombuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hpomyibzb"/><path class="q5txpcciu"/><path clip-rule="evenodd" class="wumnombuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-horizontal-bold"} {...others} />);
}

export default Component;
