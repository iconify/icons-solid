import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8b32nb0z.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="k8b32nb0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrow-trend-down"} {...others} />);
}

export default Component;
