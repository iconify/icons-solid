import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyzlnrz5l.css';
import '../../css/d/ds-wa0npy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tyzlnrz5l"/><path class="ds-wa0npy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bus-front"} {...others} />);
}

export default Component;
