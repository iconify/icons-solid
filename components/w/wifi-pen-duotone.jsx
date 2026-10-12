import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga6_k34_o.css';
import '../../css/u/u50bmlwji.css';
import '../../css/i/i-vtnuatc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ga6_k34_o"/><path class="u50bmlwji"/><path class="i-vtnuatc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wifi-pen-duotone"} {...others} />);
}

export default Component;
