import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veyi6ibey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veyi6ibey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-event-filled"} {...others} />);
}

export default Component;
