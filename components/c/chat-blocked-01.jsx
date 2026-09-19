import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xub0iwwuf.css';
import '../../css/y/yvu06kbvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xub0iwwuf"/><path class="yvu06kbvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-blocked-01"} {...others} />);
}

export default Component;
