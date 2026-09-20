import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6bpllbml.css';
import '../../css/v/v-fqn9o9b.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/b0rzzdbxc.css';
import '../../css/a/a_egs8b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l6bpllbml"/><path class="v-fqn9o9b"/><g class="mc2zb0bvp"><path class="b0rzzdbxc"/><path class="a_egs8b1e"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-bold-duotone"} {...others} />);
}

export default Component;
