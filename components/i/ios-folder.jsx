import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgm3asb6j.css';
import '../../css/p/pvkl0-bwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lgm3asb6j"/><path class="pvkl0-bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-folder"} {...others} />);
}

export default Component;
