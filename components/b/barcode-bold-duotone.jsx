import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj9hsq1wl.css';
import '../../css/u/udly76byh.css';
import '../../css/t/tkwvw9b8x.css';
import '../../css/b/bxl3vfsqm.css';
import '../../css/q/q6s4mulkv.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/k-49hib6s.css';
import '../../css/i/irmghwbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nj9hsq1wl"/><path class="udly76byh"/><path class="tkwvw9b8x"/><path class="bxl3vfsqm"/><path class="q6s4mulkv"/><g class="mc2zb0bvp"><path class="k-49hib6s"/><path class="irmghwbga"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-bold-duotone"} {...others} />);
}

export default Component;
