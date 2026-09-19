import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kje_q2a3e.css';
import '../../css/m/m3vej3bgt.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="kje_q2a3e"/><path class="m3vej3bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:clipboard"} {...others} />);
}

export default Component;
