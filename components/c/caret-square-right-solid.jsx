import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv6m5xotf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uv6m5xotf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:caret-square-right-solid"} {...others} />);
}

export default Component;
