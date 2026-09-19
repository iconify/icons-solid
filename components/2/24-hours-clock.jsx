import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xk9gzvbkh.css';
import '../../css/w/wszxm99cb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xk9gzvbkh"/><path class="wszxm99cb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:24-hours-clock"} {...others} />);
}

export default Component;
