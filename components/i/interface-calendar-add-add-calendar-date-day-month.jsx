import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucwmz4b2w.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ucwmz4b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-add-add-calendar-date-day-month"} {...others} />);
}

export default Component;
