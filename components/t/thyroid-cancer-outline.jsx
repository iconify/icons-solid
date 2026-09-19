import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drag34b7r.css';
import '../../css/z/zptsp1bsp.css';
import '../../css/a/a996sxbjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="drag34b7r"/><path class="zptsp1bsp"/><path clip-rule="evenodd" class="a996sxbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:thyroid-cancer-outline"} {...others} />);
}

export default Component;
