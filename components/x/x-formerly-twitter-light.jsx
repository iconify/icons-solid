import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2z8qxnta.css';

const viewBox = {"width":1200,"height":1227};
const content = `<path class="s2z8qxnta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:x-formerly-twitter-light"} {...others} />);
}

export default Component;
