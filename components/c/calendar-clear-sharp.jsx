import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql5xq868z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ql5xq868z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:calendar-clear-sharp"} {...others} />);
}

export default Component;
