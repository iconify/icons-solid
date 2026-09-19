import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb3eeh2at.css';

const viewBox = {"width":272,"height":432};
const content = `<path class="eb3eeh2at"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:bluetooth"} {...others} />);
}

export default Component;
