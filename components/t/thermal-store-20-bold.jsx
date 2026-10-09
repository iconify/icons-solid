import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6gyvvg5u.css';
import '../../css/w/w5la7cbdm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f6gyvvg5u"/><path class="w5la7cbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-store-20-bold"} {...others} />);
}

export default Component;
