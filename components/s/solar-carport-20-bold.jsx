import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0najsbtj.css';
import '../../css/h/hr1xwpbwv.css';
import '../../css/q/qyj_q3bhs.css';
import '../../css/e/ev58appus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n0najsbtj"/><path class="hr1xwpbwv"/><path class="qyj_q3bhs"/><path class="ev58appus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-carport-20-bold"} {...others} />);
}

export default Component;
