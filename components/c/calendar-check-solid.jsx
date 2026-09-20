import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwcjaq9ki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwcjaq9ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:calendar-check-solid"} {...others} />);
}

export default Component;
