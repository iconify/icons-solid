import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2ezievuu.css';
import '../../css/h/h0hx-t7ds.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v2ezievuu"/><path class="h0hx-t7ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-key-20-bold"} {...others} />);
}

export default Component;
