import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iua0p6vky.css';
import '../../css/u/ulzgaspjq.css';
import '../../css/s/stcekdbwb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="iua0p6vky"/><path clip-rule="evenodd" class="ulzgaspjq"/><path class="stcekdbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:ungroup-by-ref-type"} {...others} />);
}

export default Component;
