import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbe_w6b4m.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kbe_w6b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:nine-point-star-outline-on-square"} {...others} />);
}

export default Component;
