import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-o0r-jjj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i-o0r-jjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:semaphore"} {...others} />);
}

export default Component;
