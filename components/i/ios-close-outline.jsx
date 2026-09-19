import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg35tlbum.css';
import '../../css/a/at_92mbzn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yg35tlbum"/><path class="at_92mbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-close-outline"} {...others} />);
}

export default Component;
