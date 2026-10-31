import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/apqfo6bzv.css';
import '../../css/e/eymfqbctc.css';
import '../../css/h/hxzvzcc4m.css';
import '../../css/k/kvweaqx-f.css';
import '../../css/u/u9852abpr.css';
import '../../css/k/k8m463bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="apqfo6bzv wm-shadow"/><path class="eymfqbctc"/><path class="hxzvzcc4m"/><path class="kvweaqx-f"/><path class="u9852abpr"/><path class="k8m463bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:sandwich"} {...others} />);
}

export default Component;
