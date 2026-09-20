import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aj9s6j9ek.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aj9s6j9ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-repo-16"} {...others} />);
}

export default Component;
