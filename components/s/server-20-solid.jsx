import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfuhj1bvk.css';
import '../../css/c/cmlgwxbox.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="gfuhj1bvk"/><path clip-rule="evenodd" class="cmlgwxbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:server-20-solid"} {...others} />);
}

export default Component;
