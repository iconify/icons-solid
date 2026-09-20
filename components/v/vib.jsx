import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrwqhqsxr.css';
import '../../css/u/ur_-j1b1o.css';

const viewBox = {"width":1397,"height":632};
const content = `<path class="wrwqhqsxr"/><path class="ur_-j1b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:vib"} {...others} />);
}

export default Component;
