import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4brwwbzi.css';
import '../../css/f/f1h18-blq.css';
import '../../css/x/xhcoxr84o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w4brwwbzi"/><path class="f1h18-blq"/><path class="xhcoxr84o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:envelope-unread-duotone"} {...others} />);
}

export default Component;
