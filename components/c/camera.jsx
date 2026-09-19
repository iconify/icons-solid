import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x57p1aczu.css';
import '../../css/g/grubd94nl.css';

const viewBox = {"width":42,"height":32};
const content = `<g class="cuyn6tgcc"><path class="x57p1aczu"/><path class="grubd94nl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:camera"} {...others} />);
}

export default Component;
