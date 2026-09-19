import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7ex6tb5o.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="n7ex6tb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:plus-circle"} {...others} />);
}

export default Component;
