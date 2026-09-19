import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcwzlqb9o.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="vcwzlqb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:caret-right-circle"} {...others} />);
}

export default Component;
