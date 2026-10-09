import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbbi_6vwc.css';
import '../../css/x/xo70x1c7t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qbbi_6vwc"/><path class="xo70x1c7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:music-20-bold"} {...others} />);
}

export default Component;
