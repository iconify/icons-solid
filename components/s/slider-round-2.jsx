import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxjmq8b0l.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="nxjmq8b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:slider-round-2"} {...others} />);
}

export default Component;
