import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2b4x00yh.css';
import '../../css/s/s7a7p8b1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e2b4x00yh"/><path class="s7a7p8b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:waiters"} {...others} />);
}

export default Component;
