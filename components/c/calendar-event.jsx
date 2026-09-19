import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix75i-bma.css';
import '../../css/m/m5m_kacnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix75i-bma"/><path class="m5m_kacnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:calendar-event"} {...others} />);
}

export default Component;
