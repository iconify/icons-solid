import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n58-9tbcx.css';
import '../../css/x/x45x9-l1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n58-9tbcx"/><path class="x45x9-l1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-square-warning"} {...others} />);
}

export default Component;
