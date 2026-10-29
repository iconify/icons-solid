import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmafvfbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmafvfbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:parentheses-solid"} {...others} />);
}

export default Component;
