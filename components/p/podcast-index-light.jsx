import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fa6e78afl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fa6e78afl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:podcast-index-light"} {...others} />);
}

export default Component;
