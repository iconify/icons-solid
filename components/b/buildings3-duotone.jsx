import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w72fq3cev.css';
import '../../css/g/g_6c7be5d.css';
import '../../css/m/m9-0_tbam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w72fq3cev"/><path class="g_6c7be5d"/><path class="m9-0_tbam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:buildings3-duotone"} {...others} />);
}

export default Component;
