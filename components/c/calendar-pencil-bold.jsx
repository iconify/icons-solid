import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6dt8aclf.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="p6dt8aclf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-pencil-bold"} {...others} />);
}

export default Component;
