import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcl_vm3gu.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e6j6dgbiz.css';
import '../../css/m/mgnw8cbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vcl_vm3gu"/><g class="mc2zb0bvp"><path class="e6j6dgbiz"/><path class="mgnw8cbbw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-bold-duotone"} {...others} />);
}

export default Component;
