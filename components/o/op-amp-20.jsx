import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0bhnrrd.css';
import '../../css/w/wqubl0buo.css';
import '../../css/x/x_9_2pbcd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="to0bhnrrd"/><path class="wqubl0buo"/><path class="x_9_2pbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:op-amp-20"} {...others} />);
}

export default Component;
