import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc66k6u8b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cc66k6u8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:smile-wink"} {...others} />);
}

export default Component;
