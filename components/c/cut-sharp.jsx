import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esos5ccex.css';
import '../../css/g/gltd-e1ay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="esos5ccex"/><path class="gltd-e1ay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:cut-sharp"} {...others} />);
}

export default Component;
