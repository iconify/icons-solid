import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwsjuw0qk.css';
import '../../css/p/p-1hx8b8f.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="zwsjuw0qk"/><path class="p-1hx8b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bookmark-simple-slash-duotone"} {...others} />);
}

export default Component;
