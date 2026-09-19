import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1yv8q8vv.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="y1yv8q8vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alarm-plus"} {...others} />);
}

export default Component;
