import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbykqmm-k.css';
import '../../css/v/vj2wocbip.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="kbykqmm-k"/><path class="vj2wocbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:location"} {...others} />);
}

export default Component;
