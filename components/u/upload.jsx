import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpx8s0bok.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lpx8s0bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:upload"} {...others} />);
}

export default Component;
