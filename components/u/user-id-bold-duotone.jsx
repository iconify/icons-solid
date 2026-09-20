import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxxxmyjfa.css';
import '../../css/x/xj32xhtuu.css';
import '../../css/z/zhvylkbbv.css';
import '../../css/x/xl6_0y5df.css';
import '../../css/l/lnf7riapf.css';
import '../../css/v/vsng8ubjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mxxxmyjfa"/><path class="xj32xhtuu"/><path class="zhvylkbbv"/><path class="xl6_0y5df"/><path class="lnf7riapf"/><path class="vsng8ubjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-id-bold-duotone"} {...others} />);
}

export default Component;
