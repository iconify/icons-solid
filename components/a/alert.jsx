import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inn8jvb8q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="inn8jvb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:alert"} {...others} />);
}

export default Component;
