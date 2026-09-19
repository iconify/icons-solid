import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tb078objv.css';
import '../../css/m/mv68o2z5x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tb078objv"/><path class="mv68o2z5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:battery-high"} {...others} />);
}

export default Component;
