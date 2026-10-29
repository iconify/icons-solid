import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aml43npzb.css';
import '../../css/y/yf8s-acsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aml43npzb"/><path class="yf8s-acsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pause"} {...others} />);
}

export default Component;
