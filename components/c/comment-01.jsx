import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/c9waqkqud.css';
import '../../css/o/o-6k6bcav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="c9waqkqud"/><path class="o-6k6bcav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comment-01"} {...others} />);
}

export default Component;
