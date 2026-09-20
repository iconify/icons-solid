import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkbir6bzz.css';
import '../../css/i/ikwb68qrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jkbir6bzz"/><path class="ikwb68qrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:feather-filled"} {...others} />);
}

export default Component;
