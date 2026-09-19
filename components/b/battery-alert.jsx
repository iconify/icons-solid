import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-yawdb2x.css';
import '../../css/j/j5cb_7bdt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z-yawdb2x"/><path class="j5cb_7bdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:battery-alert"} {...others} />);
}

export default Component;
