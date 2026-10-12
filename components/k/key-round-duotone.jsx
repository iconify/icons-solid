import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l2ag24bhm.css';
import '../../css/v/vsu8o2e_j.css';
import '../../css/q/qj4n1fmer.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l2ag24bhm"/><path class="vsu8o2e_j"/><path class="qj4n1fmer"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:key-round-duotone"} {...others} />);
}

export default Component;
