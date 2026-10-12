import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfbnlzbak.css';
import '../../css/r/rg7oaeb_d.css';
import '../../css/t/tlufanbfr.css';
import '../../css/l/l-8yn0ulh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vfbnlzbak"/><path class="rg7oaeb_d"/><path class="tlufanbfr"/><path class="l-8yn0ulh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brain-circuit-duotone"} {...others} />);
}

export default Component;
