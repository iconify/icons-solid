import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx4navo8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qx4navo8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:network-intelligence-center"} {...others} />);
}

export default Component;
