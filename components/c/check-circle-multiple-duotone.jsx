import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnln5wbrr.css';
import '../../css/t/tile_qy4z.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="fnln5wbrr"/><path class="tile_qy4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:check-circle-multiple-duotone"} {...others} />);
}

export default Component;
