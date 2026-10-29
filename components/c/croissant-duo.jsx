import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r8tvyrqaf.css';
import '../../css/e/e_jnf7h6d.css';
import '../../css/o/ot7ug_ubs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r8tvyrqaf"/><path class="e_jnf7h6d wm-a"/><path class="ot7ug_ubs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:croissant-duo"} {...others} />);
}

export default Component;
