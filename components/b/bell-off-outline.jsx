import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imjvgdxia.css';
import '../../css/o/owo5aibky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="imjvgdxia"/><path clip-rule="evenodd" class="owo5aibky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bell-off-outline"} {...others} />);
}

export default Component;
