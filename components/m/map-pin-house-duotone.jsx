import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfvnync4s.css';
import '../../css/z/zxvnpccay.css';
import '../../css/o/oipobtb1t.css';
import '../../css/u/u0z041bxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mfvnync4s"/><path class="zxvnpccay"/><path class="oipobtb1t"/><path class="u0z041bxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pin-house-duotone"} {...others} />);
}

export default Component;
