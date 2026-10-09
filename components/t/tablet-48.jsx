import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzvt794yl.css';
import '../../css/u/ubmyk0c4u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yzvt794yl"/><path class="ubmyk0c4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tablet-48"} {...others} />);
}

export default Component;
