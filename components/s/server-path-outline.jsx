import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2aaw0s2e.css';
import '../../css/q/q4txhdbib.css';
import '../../css/j/jwq3rc64j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x2aaw0s2e"/><path class="q4txhdbib"/><path class="jwq3rc64j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-outline"} {...others} />);
}

export default Component;
