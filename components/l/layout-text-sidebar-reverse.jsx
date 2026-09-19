import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h8zc39blm.css';
import '../../css/r/r9d3c_bio.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="h8zc39blm"/><path class="r9d3c_bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:layout-text-sidebar-reverse"} {...others} />);
}

export default Component;
