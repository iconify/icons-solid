import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajoemkl3n.css';
import '../../css/p/pj2wawb7v.css';
import '../../css/i/ikp8k8bfm.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="ajoemkl3n"/><path class="pj2wawb7v"/><path class="ikp8k8bfm"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:text-bubbles-circle"} {...others} />);
}

export default Component;
