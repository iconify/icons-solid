import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uczxtfbti.css';
import '../../css/p/p1cx38bqa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uczxtfbti"/><path class="p1cx38bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-hat-20"} {...others} />);
}

export default Component;
