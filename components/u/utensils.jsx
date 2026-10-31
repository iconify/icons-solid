import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a9kswspal.css';
import '../../css/x/xxzsk-b3k.css';
import '../../css/w/w6iv9z4ab.css';
import '../../css/k/k7e3l0baq.css';
import '../../css/j/jra9tx6_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a9kswspal wm-shadow"/><path class="xxzsk-b3k"/><path class="w6iv9z4ab"/><path class="k7e3l0baq"/><path class="jra9tx6_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:utensils"} {...others} />);
}

export default Component;
