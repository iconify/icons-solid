import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vug20nb6u.css';
import '../../css/t/tvz5c1gug.css';
import '../../css/t/tjfe3abxl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vug20nb6u"/><path class="tvz5c1gug"/><path class="tjfe3abxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rhel-dark"} {...others} />);
}

export default Component;
