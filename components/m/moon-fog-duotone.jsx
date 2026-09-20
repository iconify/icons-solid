import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1phpaccm.css';
import '../../css/u/u7im48hub.css';
import '../../css/e/e9_9o-xsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1phpaccm"/><path class="u7im48hub"/><path class="e9_9o-xsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:moon-fog-duotone"} {...others} />);
}

export default Component;
