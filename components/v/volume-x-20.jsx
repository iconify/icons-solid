import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yslz4fbvt.css';
import '../../css/i/ik3zd0b_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yslz4fbvt"/><path class="ik3zd0b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-x-20"} {...others} />);
}

export default Component;
