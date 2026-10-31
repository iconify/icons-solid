import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e838ehlnw.css';
import '../../css/j/jjlni_b5z.css';
import '../../css/p/pz5v7bauy.css';
import '../../css/y/yj1scxbnj.css';
import '../../css/l/l3l0oubsy.css';
import '../../css/x/x71fhsbla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e838ehlnw wm-shadow"/><path class="jjlni_b5z"/><path class="pz5v7bauy"/><path class="yj1scxbnj"/><path class="l3l0oubsy"/><path class="x71fhsbla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:drone"} {...others} />);
}

export default Component;
