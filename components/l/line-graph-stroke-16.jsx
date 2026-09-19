import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/ph1s97tzl.css';
import '../../css/t/t_dks8l2z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><rect class="ph1s97tzl"/><path class="t_dks8l2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:line-graph-stroke-16"} {...others} />);
}

export default Component;
