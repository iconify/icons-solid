import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbfzuei-h.css';
import '../../css/t/tl9gqhp2o.css';
import '../../css/i/i68nbtb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mbfzuei-h"/><path class="tl9gqhp2o"/><path class="i68nbtb8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-cross-bold-duotone"} {...others} />);
}

export default Component;
