import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d__305b4d.css';
import '../../css/f/fbzz2oydx.css';
import '../../css/b/b0wzi4bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d__305b4d"/><path class="fbzz2oydx"/><path class="b0wzi4bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:reload"} {...others} />);
}

export default Component;
