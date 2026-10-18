import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yumz50bwm.css';
import '../../css/f/fu_1axbuk.css';
import '../../css/w/wd-cb2baj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yumz50bwm"/><path class="fu_1axbuk"/><path class="wd-cb2baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waste-to-energy-20"} {...others} />);
}

export default Component;
