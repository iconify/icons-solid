import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0zqk9bjj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v0zqk9bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:strikethrough"} {...others} />);
}

export default Component;
