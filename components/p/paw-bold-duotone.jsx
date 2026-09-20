import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so-kyjbpx.css';
import '../../css/f/fq2vfgfhg.css';
import '../../css/m/m-0j5bclz.css';
import '../../css/g/gzr_n4aup.css';
import '../../css/p/po5iaqb0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="so-kyjbpx"/><path class="fq2vfgfhg"/><path class="m-0j5bclz"/><path class="gzr_n4aup"/><path class="po5iaqb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paw-bold-duotone"} {...others} />);
}

export default Component;
