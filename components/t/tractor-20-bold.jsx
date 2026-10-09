import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yak9gybyx.css';
import '../../css/f/ftk0oxb7p.css';
import '../../css/z/z2iqjbiby.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yak9gybyx"/><path class="ftk0oxb7p"/><path class="z2iqjbiby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tractor-20-bold"} {...others} />);
}

export default Component;
