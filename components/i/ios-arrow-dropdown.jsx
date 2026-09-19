import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv3w-bboh.css';
import '../../css/e/e0us24bst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xv3w-bboh"/><path class="e0us24bst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-dropdown"} {...others} />);
}

export default Component;
