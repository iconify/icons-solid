import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qoe1ehbas.css';
import '../../css/s/s4pl42bvj.css';
import '../../css/l/lwkmjtx7o.css';
import '../../css/o/ovxylj__k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qoe1ehbas"/><path class="s4pl42bvj"/><path class="lwkmjtx7o"/><path class="ovxylj__k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:church-duotone"} {...others} />);
}

export default Component;
