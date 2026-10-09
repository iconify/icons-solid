import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2ylmobyz.css';
import '../../css/k/kzolceiuj.css';
import '../../css/c/ce_ntp43z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y2ylmobyz"/><path class="kzolceiuj"/><path class="ce_ntp43z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-stove-20"} {...others} />);
}

export default Component;
