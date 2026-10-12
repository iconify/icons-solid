import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mx7m2kb4i.css';
import '../../css/m/mtt6u2npc.css';
import '../../css/v/vt2jqcb8p.css';
import '../../css/b/bvgmm8b4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mx7m2kb4i"/><path class="mtt6u2npc"/><path class="vt2jqcb8p"/><path class="bvgmm8b4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:biceps-flexed-duotone"} {...others} />);
}

export default Component;
