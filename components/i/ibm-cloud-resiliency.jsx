import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrtgb7mac.css';
import '../../css/s/swkhaseke.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wrtgb7mac"/><path class="swkhaseke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-resiliency"} {...others} />);
}

export default Component;
