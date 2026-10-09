import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i42u6x3xb.css';
import '../../css/s/shy242ktc.css';
import '../../css/k/ktdhr6b1o.css';
import '../../css/h/hvct_1bia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i42u6x3xb"/><path class="shy242ktc"/><path class="ktdhr6b1o"/><path class="hvct_1bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-pot-20"} {...others} />);
}

export default Component;
