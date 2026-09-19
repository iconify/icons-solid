import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwmeq3btb.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="vwmeq3btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:calendar-week"} {...others} />);
}

export default Component;
