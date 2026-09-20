import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ren4p7bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ren4p7bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:truck-delivery-outline"} {...others} />);
}

export default Component;
