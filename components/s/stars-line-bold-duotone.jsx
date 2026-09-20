import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lez1zredg.css';
import '../../css/m/m0h0ptnxz.css';
import '../../css/h/httstt_8v.css';
import '../../css/w/w9a3f6bcy.css';
import '../../css/x/xtz6tjetj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lez1zredg"/><path class="m0h0ptnxz"/><g clip-rule="evenodd" class="httstt_8v"><path class="w9a3f6bcy"/><path class="xtz6tjetj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-line-bold-duotone"} {...others} />);
}

export default Component;
