import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgcmxccix.css';
import '../../css/x/xlramcbzi.css';

const viewBox = {"width":30,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vgcmxccix"/><path class="xlramcbzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:alarmclock"} {...others} />);
}

export default Component;
