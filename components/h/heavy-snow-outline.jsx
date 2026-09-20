import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzxn7xbvo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bzxn7xbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:heavy-snow-outline"} {...others} />);
}

export default Component;
