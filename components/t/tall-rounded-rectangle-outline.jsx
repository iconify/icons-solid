import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dd1hsxbwl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dd1hsxbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tall-rounded-rectangle-outline"} {...others} />);
}

export default Component;
