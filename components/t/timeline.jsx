import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0oyuo_sd.css';
import '../../css/j/jbrs2gbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c0oyuo_sd"/><path class="jbrs2gbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:timeline"} {...others} />);
}

export default Component;
