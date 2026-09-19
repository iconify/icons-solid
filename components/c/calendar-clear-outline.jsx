import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvtzd3b0t.css';
import '../../css/m/mprowr57e.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="zvtzd3b0t"/><path class="mprowr57e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:calendar-clear-outline"} {...others} />);
}

export default Component;
