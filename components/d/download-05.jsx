import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxbwqlgnx.css';
import '../../css/y/yvx951gue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hxbwqlgnx"/><path class="yvx951gue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:download-05"} {...others} />);
}

export default Component;
