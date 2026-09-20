import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq9pe6bqo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vq9pe6bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:to-be-published"} {...others} />);
}

export default Component;
