import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fluzmrbjw.css';
import '../../css/l/lufva9jei.css';
import '../../css/p/p7z1hc8uo.css';
import '../../css/y/yndgl7v6m.css';
import '../../css/k/kk374q8vq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fluzmrbjw wm-shadow"/><path class="lufva9jei"/><path class="p7z1hc8uo"/><path class="yndgl7v6m"/><path class="kk374q8vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:navigation-2"} {...others} />);
}

export default Component;
