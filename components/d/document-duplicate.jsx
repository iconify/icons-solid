import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tptqvebil.css';
import '../../css/w/wzn8icbog.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="tptqvebil"/><path class="wzn8icbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:document-duplicate"} {...others} />);
}

export default Component;
