import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdzj-zbni.css';
import '../../css/x/xm4-qxbrj.css';
import '../../css/k/kfu7dr89j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hdzj-zbni"/><path clip-rule="evenodd" class="xm4-qxbrj"/><path class="kfu7dr89j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-vertical-outline"} {...others} />);
}

export default Component;
