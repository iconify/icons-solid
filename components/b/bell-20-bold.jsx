import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov19mnblx.css';
import '../../css/z/zpo4y_beo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ov19mnblx"/><path class="zpo4y_beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-20-bold"} {...others} />);
}

export default Component;
