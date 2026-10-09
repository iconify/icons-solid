import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq4q6o5xn.css';
import '../../css/p/p72eb_bpu.css';
import '../../css/t/ty8c60bpt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xq4q6o5xn"/><path class="p72eb_bpu"/><path class="ty8c60bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jack-up-vessel-20"} {...others} />);
}

export default Component;
