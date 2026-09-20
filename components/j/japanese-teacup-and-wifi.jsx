import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzyoycbgq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="vzyoycbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:japanese-teacup-and-wifi"} {...others} />);
}

export default Component;
