import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfvnync4s.css';
import '../../css/z/zxvnpccay.css';
import '../../css/c/chqik1qby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mfvnync4s"/><path class="zxvnpccay"/><path class="chqik1qby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-house-duotone"} {...others} />);
}

export default Component;
