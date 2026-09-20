import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_tkm_8we.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k_tkm_8we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cairn-and-three-tall-rectangles-right"} {...others} />);
}

export default Component;
