import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxu3tabzs.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="pxu3tabzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:filter-circle-xmark"} {...others} />);
}

export default Component;
