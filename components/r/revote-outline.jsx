import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo3mbbcpz.css';
import '../../css/z/zv6teybjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oo3mbbcpz"/><path class="zv6teybjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:revote-outline"} {...others} />);
}

export default Component;
