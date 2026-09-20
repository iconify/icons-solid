import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at9917bba.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="at9917bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-remove-calendar-date-day-delete-month-remove-subtract"} {...others} />);
}

export default Component;
