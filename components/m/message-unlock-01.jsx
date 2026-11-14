import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/px3alub5r.css';
import '../../css/x/xwlhkilrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="px3alub5r"/><path class="xwlhkilrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-unlock-01"} {...others} />);
}

export default Component;
