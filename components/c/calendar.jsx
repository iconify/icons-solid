import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j6i8f4bys.css';
import '../../css/j/jj037z9yi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j6i8f4bys"/><path class="jj037z9yi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:calendar"} {...others} />);
}

export default Component;
