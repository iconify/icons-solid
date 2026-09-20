import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xukn4qufr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xukn4qufr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-time-midnight-whole-midnight-hour-clock-time"} {...others} />);
}

export default Component;
