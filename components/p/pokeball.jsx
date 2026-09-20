import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/c/cc8_vo6ef.css';
import '../../css/e/etbvuncfk.css';
import '../../css/z/z26-jybqr.css';
import '../../css/e/e31npysoq.css';
import '../../css/m/m1_01rb-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="cc8_vo6ef"/><path class="etbvuncfk"/><path class="z26-jybqr"/><path class="e31npysoq"/><path class="m1_01rb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pokeball"} {...others} />);
}

export default Component;
