import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe7c8fl3u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qe7c8fl3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:bookmark-16"} {...others} />);
}

export default Component;
