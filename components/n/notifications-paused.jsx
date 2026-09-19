import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxcrvh-7o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mxcrvh-7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:notifications-paused"} {...others} />);
}

export default Component;
