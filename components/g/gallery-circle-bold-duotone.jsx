import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtdqotsqn.css';
import '../../css/s/sryg2hb0f.css';
import '../../css/l/lmj6xn97l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rtdqotsqn"/><path class="sryg2hb0f"/><path clip-rule="evenodd" class="lmj6xn97l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-circle-bold-duotone"} {...others} />);
}

export default Component;
