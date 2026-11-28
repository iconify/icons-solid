import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5jd71bvg.css';
import '../../css/r/r4kfx2b8v.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="d5jd71bvg"/><path class="r4kfx2b8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:replay-10-duotone"} {...others} />);
}

export default Component;
