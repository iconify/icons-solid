import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l28qpg_5e.css';
import '../../css/z/zrk0uqbtm.css';
import '../../css/b/b2ejj7brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l28qpg_5e"/><path class="zrk0uqbtm"/><path class="b2ejj7brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-outline"} {...others} />);
}

export default Component;
