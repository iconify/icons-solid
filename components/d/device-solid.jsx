import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdfarhy4e.css';
import '../../css/d/djr3qgb2d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tdfarhy4e"/><path class="djr3qgb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:device-solid"} {...others} />);
}

export default Component;
