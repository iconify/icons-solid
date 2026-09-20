import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbc358yre.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bbc358yre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-calendar-disable-calendar-date-day-delete-disable-month-remove"} {...others} />);
}

export default Component;
