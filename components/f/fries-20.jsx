import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qot8k_bnm.css';
import '../../css/u/uivgpybzr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qot8k_bnm"/><path class="uivgpybzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fries-20"} {...others} />);
}

export default Component;
