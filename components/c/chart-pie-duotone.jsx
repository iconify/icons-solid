import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2lcyxzyt.css';
import '../../css/r/rz0q3eb5l.css';
import '../../css/u/u1dt7ccjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f2lcyxzyt"/><path class="rz0q3eb5l"/><path class="u1dt7ccjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-pie-duotone"} {...others} />);
}

export default Component;
