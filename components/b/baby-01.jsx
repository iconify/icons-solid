import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvq9_9jgb.css';
import '../../css/p/pgltkub_x.css';
import '../../css/l/l8ivooz9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rvq9_9jgb"/><path class="pgltkub_x"/><path class="l8ivooz9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baby-01"} {...others} />);
}

export default Component;
