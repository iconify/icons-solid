import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd_q8ew-y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nd_q8ew-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:dolly"} {...others} />);
}

export default Component;
