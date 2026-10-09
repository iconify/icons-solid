import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elry085fn.css';
import '../../css/d/duddw2vqv.css';
import '../../css/y/yc0e9lbqs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="elry085fn"/><path class="duddw2vqv"/><path class="yc0e9lbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:service-vessel-20-bold"} {...others} />);
}

export default Component;
