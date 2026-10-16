import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybbuh2wlg.css';
import '../../css/w/wnxmmacan.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ybbuh2wlg"/><path class="wnxmmacan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:negative-price-20-bold"} {...others} />);
}

export default Component;
