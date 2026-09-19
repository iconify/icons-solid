import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c8lxk58_q.css';
import '../../css/c/com88-bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c8lxk58_q"/><path class="com88-bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-progress-01"} {...others} />);
}

export default Component;
