import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htmrikbhg.css';
import '../../css/t/t4uyv6usa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="htmrikbhg"/><path class="t4uyv6usa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:edit"} {...others} />);
}

export default Component;
