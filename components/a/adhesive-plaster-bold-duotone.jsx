import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkgvjbbfd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/lkzock2wt.css';
import '../../css/p/p4n3pmbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bkgvjbbfd"/><g class="mc2zb0bvp"><path class="lkzock2wt"/><path class="p4n3pmbrj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-bold-duotone"} {...others} />);
}

export default Component;
