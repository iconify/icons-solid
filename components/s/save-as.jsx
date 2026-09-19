import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eiexz3bzk.css';
import '../../css/b/bf7d-lzxu.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="eiexz3bzk"/><path class="bf7d-lzxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:save-as"} {...others} />);
}

export default Component;
