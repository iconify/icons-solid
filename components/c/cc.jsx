import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/timynoxoa.css';

const viewBox = {"width":2048,"height":1536};
const content = `<path class="timynoxoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc"} {...others} />);
}

export default Component;
