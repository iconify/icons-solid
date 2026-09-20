import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3rq8j5si.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b3rq8j5si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cloud-download"} {...others} />);
}

export default Component;
