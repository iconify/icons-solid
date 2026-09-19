import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymtnnmbxm.css';
import '../../css/f/fs6qilbac.css';
import '../../css/z/z4vu3bcgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ymtnnmbxm"/><path class="fs6qilbac"/><path class="z4vu3bcgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:spleen-outline-24px"} {...others} />);
}

export default Component;
