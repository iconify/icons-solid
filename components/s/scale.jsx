import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-56-xbut.css';
import '../../css/f/f7jsn62zn.css';
import '../../css/n/n_cnkj-8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="v-56-xbut"/><path class="f7jsn62zn"/><path class="n_cnkj-8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:scale"} {...others} />);
}

export default Component;
