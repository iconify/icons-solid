import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrcticvhp.css';
import '../../css/t/t4e23u-au.css';
import '../../css/c/cpm8z1bdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xrcticvhp"/><path clip-rule="evenodd" class="t4e23u-au"/><path class="cpm8z1bdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-smartphone-bold-duotone"} {...others} />);
}

export default Component;
