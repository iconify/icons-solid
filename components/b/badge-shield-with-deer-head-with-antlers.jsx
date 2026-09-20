import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4d9v6lqd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f4d9v6lqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:badge-shield-with-deer-head-with-antlers"} {...others} />);
}

export default Component;
