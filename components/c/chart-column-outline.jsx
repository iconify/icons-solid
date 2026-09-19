import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drr99_06v.css';
import '../../css/w/whufb0eev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="chart-column-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="drr99_06v"/><path class="whufb0eev"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:chart-column-outline"} {...others} />);
}

export default Component;
