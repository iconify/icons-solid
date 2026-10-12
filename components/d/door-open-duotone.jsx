import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gakixybhj.css';
import '../../css/p/pga7jebjx.css';
import '../../css/e/edda724cg.css';
import '../../css/w/w8fxfsb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gakixybhj"/><path class="pga7jebjx"/><path class="edda724cg"/><path class="w8fxfsb0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:door-open-duotone"} {...others} />);
}

export default Component;
