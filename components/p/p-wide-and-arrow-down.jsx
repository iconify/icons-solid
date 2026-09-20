import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8q7uxbee.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z8q7uxbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:p-wide-and-arrow-down"} {...others} />);
}

export default Component;
