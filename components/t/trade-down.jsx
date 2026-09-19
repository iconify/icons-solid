import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwkaucbes.css';
import '../../css/j/j_mkz7bvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vwkaucbes"/><path class="j_mkz7bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trade-down"} {...others} />);
}

export default Component;
