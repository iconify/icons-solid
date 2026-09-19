import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yly7_1ytk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yly7_1ytk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:comment-dollar"} {...others} />);
}

export default Component;
