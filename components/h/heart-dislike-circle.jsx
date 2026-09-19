import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw1-dpbqf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vw1-dpbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:heart-dislike-circle"} {...others} />);
}

export default Component;
