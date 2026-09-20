import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ip_hlzfry.css';
import '../../css/k/ky_c7b80d.css';
import '../../css/b/b_gmwtrte.css';
import '../../css/u/u5bqo67kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ip_hlzfry"/><path class="ky_c7b80d"/><path class="b_gmwtrte"/><path clip-rule="evenodd" class="u5bqo67kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-square-outline"} {...others} />);
}

export default Component;
