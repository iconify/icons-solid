import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc5trhbqj.css';
import '../../css/p/p6ca8ub5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dc5trhbqj"/><path class="p6ca8ub5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:akkoma"} {...others} />);
}

export default Component;
