import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu5cfjbnh.css';

const viewBox = {"width":128,"height":256};
const content = `<path class="vu5cfjbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:digital-dot"} {...others} />);
}

export default Component;
