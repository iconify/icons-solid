import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvr1_bcph.css';
import '../../css/j/jebrjz48c.css';
import '../../css/l/ld1b85b3q.css';
import '../../css/l/l98hgnbtg.css';
import '../../css/p/p02lewawn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qvr1_bcph"/><path class="jebrjz48c"/><path class="ld1b85b3q"/><path class="l98hgnbtg"/><path class="p02lewawn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:train-front-tunnel-duotone"} {...others} />);
}

export default Component;
