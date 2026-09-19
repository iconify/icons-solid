import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7splobbl.css';
import '../../css/f/f5uee-srq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="n7splobbl"/><path clip-rule="evenodd" class="f5uee-srq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:zoom-in"} {...others} />);
}

export default Component;
