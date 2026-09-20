import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h29tk6bqu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h29tk6bqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-blank-calendar-date-day-month"} {...others} />);
}

export default Component;
