import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8ja2jrrf.css';
import '../../css/i/ikpuaxd0t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="a8ja2jrrf"/><path class="ikpuaxd0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:thermometer"} {...others} />);
}

export default Component;
