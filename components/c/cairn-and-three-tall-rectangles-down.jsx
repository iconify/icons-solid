import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se_k1pijo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="se_k1pijo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cairn-and-three-tall-rectangles-down"} {...others} />);
}

export default Component;
