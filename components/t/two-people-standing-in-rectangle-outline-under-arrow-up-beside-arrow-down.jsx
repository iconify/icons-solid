import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-8at39gu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m-8at39gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:two-people-standing-in-rectangle-outline-under-arrow-up-beside-arrow-down"} {...others} />);
}

export default Component;
