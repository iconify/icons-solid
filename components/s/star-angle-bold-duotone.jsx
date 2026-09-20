import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v_f4tuwyf.css';
import '../../css/n/ng0o3zupy.css';
import '../../css/q/q6p93hbjw.css';
import '../../css/v/vg0klab_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v_f4tuwyf"/><path class="ng0o3zupy"/><path class="q6p93hbjw"/></g><path class="vg0klab_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-angle-bold-duotone"} {...others} />);
}

export default Component;
