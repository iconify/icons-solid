import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vk-nl1ymc.css';
import '../../css/l/lj69l5bdu.css';
import '../../css/a/ansc4kbhg.css';
import '../../css/s/s4_ob94ry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="vk-nl1ymc"/><path class="lj69l5bdu"/></g><path class="ansc4kbhg"/><path class="s4_ob94ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cosmetic-bold-duotone"} {...others} />);
}

export default Component;
