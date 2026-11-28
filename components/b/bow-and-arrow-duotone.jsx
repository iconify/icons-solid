import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm57k6b9r.css';
import '../../css/v/vekvmulpq.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="gm57k6b9r"/><path class="vekvmulpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:bow-and-arrow-duotone"} {...others} />);
}

export default Component;
