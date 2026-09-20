import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4rra6b8d.css';
import '../../css/w/wlb_jwm4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l4rra6b8d"/><path class="wlb_jwm4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alarm-filled"} {...others} />);
}

export default Component;
