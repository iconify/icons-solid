import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y60-zbckk.css';
import '../../css/b/b-a4_e7bx.css';
import '../../css/k/k_vmmvsui.css';
import '../../css/t/tst17fbkt.css';
import '../../css/g/g4ps37bvh.css';

const viewBox = {"width":652,"height":250,"top":200};
const content = `<g class="y60-zbckk"><defs><linearGradient id="SVGk4AyZbkB" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" class="b-a4_e7bx"/><stop offset="70%" class="b-a4_e7bx"/><stop offset="100%" class="k_vmmvsui"/></linearGradient></defs><path fill="url(#SVGk4AyZbkB)" class="tst17fbkt"/><path class="g4ps37bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:network-rail"} {...others} />);
}

export default Component;
