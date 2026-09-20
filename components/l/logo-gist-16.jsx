import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxeawbdpb.css';

const viewBox = {"width":25,"height":16};
const content = `<path class="wxeawbdpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:logo-gist-16"} {...others} />);
}

export default Component;
