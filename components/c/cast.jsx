import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izsy3el0p.css';
import '../../css/d/dxgso9_ti.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="izsy3el0p"/><path class="dxgso9_ti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:cast"} {...others} />);
}

export default Component;
