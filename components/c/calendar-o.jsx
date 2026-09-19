import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f56opvbcd.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="f56opvbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:calendar-o"} {...others} />);
}

export default Component;
