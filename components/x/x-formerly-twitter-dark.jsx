import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxr05_b8y.css';

const viewBox = {"width":1200,"height":1227};
const content = `<path class="nxr05_b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:x-formerly-twitter-dark"} {...others} />);
}

export default Component;
