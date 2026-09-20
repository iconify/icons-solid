import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr4t8iznt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vr4t8iznt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:motorcycle-under-list-beside-checkmark"} {...others} />);
}

export default Component;
