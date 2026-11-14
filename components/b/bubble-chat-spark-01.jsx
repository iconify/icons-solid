import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/om48obbxc.css';
import '../../css/c/ce76g-b8x.css';
import '../../css/e/e60a0hbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="om48obbxc"/><path class="ce76g-b8x"/><path class="e60a0hbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-spark-01"} {...others} />);
}

export default Component;
