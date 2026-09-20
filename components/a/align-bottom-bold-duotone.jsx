import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4lmu1bbq.css';
import '../../css/w/weko16myo.css';
import '../../css/f/fwgp1tb4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s4lmu1bbq"/><path class="weko16myo"/><path clip-rule="evenodd" class="fwgp1tb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-bottom-bold-duotone"} {...others} />);
}

export default Component;
