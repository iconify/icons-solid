import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj114hbbv.css';
import '../../css/n/n6f1xofwr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jj114hbbv"/><path class="n6f1xofwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-journal"} {...others} />);
}

export default Component;
