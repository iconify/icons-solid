import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv5t7cb2y.css';

const viewBox = {"width":512,"height":456};
const content = `<path class="yv5t7cb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dashboard"} {...others} />);
}

export default Component;
