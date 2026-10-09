import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0uvzabfw.css';
import '../../css/y/y5duq9b8q.css';
import '../../css/r/rtl9t5b1d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y0uvzabfw"/><path class="y5duq9b8q"/><path class="rtl9t5b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:global-warming-20-bold"} {...others} />);
}

export default Component;
