import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk0firxwo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xk0firxwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:motorcycle-in-parking-structure"} {...others} />);
}

export default Component;
