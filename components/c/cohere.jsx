import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a04tfwkss.css';
import '../../css/y/yv0epcrue.css';
import '../../css/w/weac8tb3e.css';

const viewBox = {"width":75,"height":75};
const content = `<path class="a04tfwkss"/><path class="yv0epcrue"/><path class="weac8tb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cohere"} {...others} />);
}

export default Component;
