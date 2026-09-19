import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wguc8ibco.css';
import '../../css/r/rp4yd9bnd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="wguc8ibco"/><path clip-rule="evenodd" class="rp4yd9bnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:umbrella"} {...others} />);
}

export default Component;
