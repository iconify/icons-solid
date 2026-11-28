import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3u6l-bti.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="r3u6l-bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:stack-simple-check-bold"} {...others} />);
}

export default Component;
