import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r31ic-bpu.css';
import '../../css/y/yuqm4qbmy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="r31ic-bpu"/><path class="yuqm4qbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:fist"} {...others} />);
}

export default Component;
