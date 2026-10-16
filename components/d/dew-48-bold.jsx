import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yotzztbdp.css';
import '../../css/r/rwd6-lkjt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yotzztbdp"/><path class="rwd6-lkjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dew-48-bold"} {...others} />);
}

export default Component;
