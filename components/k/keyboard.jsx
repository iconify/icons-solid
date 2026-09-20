import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-9w4jb6k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k-9w4jb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:keyboard"} {...others} />);
}

export default Component;
