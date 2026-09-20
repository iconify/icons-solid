import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9cnqzbbv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d9cnqzbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fork-and-spoon"} {...others} />);
}

export default Component;
