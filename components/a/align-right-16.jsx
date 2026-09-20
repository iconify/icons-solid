import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6d9jv8kh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j6d9jv8kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:align-right-16"} {...others} />);
}

export default Component;
