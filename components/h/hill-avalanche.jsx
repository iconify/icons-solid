import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3u0qroui.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="f3u0qroui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:hill-avalanche"} {...others} />);
}

export default Component;
