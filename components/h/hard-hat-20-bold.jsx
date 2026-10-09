import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psoacabks.css';
import '../../css/w/wtf21ym8u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="psoacabks"/><path class="wtf21ym8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hard-hat-20-bold"} {...others} />);
}

export default Component;
