import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2w5z4str.css';
import '../../css/b/bcmzn-obx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2w5z4str"/><path class="bcmzn-obx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rugby-ball"} {...others} />);
}

export default Component;
