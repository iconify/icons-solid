import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j01gew6ag.css';
import '../../css/p/pqdlum8dz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j01gew6ag"/><path class="pqdlum8dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-filter"} {...others} />);
}

export default Component;
