import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odyie6but.css';
import '../../css/e/en-3d656m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odyie6but"/><path class="en-3d656m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-dropright"} {...others} />);
}

export default Component;
