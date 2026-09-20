import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqwmy0b9h.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tqwmy0b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:yammer"} {...others} />);
}

export default Component;
