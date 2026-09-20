import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp9o_9agn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rp9o_9agn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-transportation-airplane-travel-plane-adventure-airplane"} {...others} />);
}

export default Component;
