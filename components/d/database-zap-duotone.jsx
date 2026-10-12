import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es97pcacw.css';
import '../../css/k/ktfp9_bgq.css';
import '../../css/u/ucogdbb3g.css';
import '../../css/e/e9ntvbx0s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="es97pcacw"/><path class="ktfp9_bgq"/><path class="ucogdbb3g"/><path class="e9ntvbx0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-zap-duotone"} {...others} />);
}

export default Component;
