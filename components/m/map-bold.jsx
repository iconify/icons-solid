import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/veutcqbwq.css';
import '../../css/f/f3hq_nndi.css';
import '../../css/r/rauknxboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="veutcqbwq"/><path class="f3hq_nndi"/><path class="rauknxboy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-bold"} {...others} />);
}

export default Component;
