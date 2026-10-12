import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5h6qkb-v.css';
import '../../css/e/ebu5-q53q.css';
import '../../css/a/ai741630p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l5h6qkb-v"/><path class="ebu5-q53q"/><path class="ai741630p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hdmi-port-duotone"} {...others} />);
}

export default Component;
