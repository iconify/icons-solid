import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuxx7n4ha.css';
import '../../css/x/xyaaz0bcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuxx7n4ha"/><path clip-rule="evenodd" class="xyaaz0bcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:calendar-date-range-solid"} {...others} />);
}

export default Component;
