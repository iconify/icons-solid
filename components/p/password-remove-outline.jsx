import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wv4k8x9qx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wv4k8x9qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:password-remove-outline"} {...others} />);
}

export default Component;
