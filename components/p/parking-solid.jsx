import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k87mnbcsh.css';
import '../../css/s/s-m4y-b6j.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="k87mnbcsh"/><path class="s-m4y-b6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:parking-solid"} {...others} />);
}

export default Component;
