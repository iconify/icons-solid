import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yehyu3l8d.css';
import '../../css/m/m6mu15bsi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yehyu3l8d"/><path class="m6mu15bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-high-48-bold"} {...others} />);
}

export default Component;
