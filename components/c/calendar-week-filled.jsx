import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6p0cw7og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r6p0cw7og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-week-filled"} {...others} />);
}

export default Component;
