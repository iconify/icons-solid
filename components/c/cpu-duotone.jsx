import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m71trac1c.css';
import '../../css/o/ocri1_tge.css';
import '../../css/o/oqn1-4bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m71trac1c"/><path class="ocri1_tge"/><path clip-rule="evenodd" class="oqn1-4bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cpu-duotone"} {...others} />);
}

export default Component;
