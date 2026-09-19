import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uh9jvoi_j.css';
import '../../css/u/udtdetrej.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="uh9jvoi_j"/><path class="udtdetrej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:mobile-phone"} {...others} />);
}

export default Component;
