import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jn6-orinv.css';
import '../../css/f/f-br0vb0i.css';
import '../../css/r/r_lokubqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jn6-orinv"/><path class="f-br0vb0i"/><path class="r_lokubqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-high-outline"} {...others} />);
}

export default Component;
