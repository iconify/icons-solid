import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-mcxxb8m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="y-mcxxb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-ticket-hobby-ticket-event-entertainment-stub-theater"} {...others} />);
}

export default Component;
