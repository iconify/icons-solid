import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6q9_ybaq.css';
import '../../css/n/nav75ifzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c6q9_ybaq"/><path class="nav75ifzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:campfire-filled"} {...others} />);
}

export default Component;
