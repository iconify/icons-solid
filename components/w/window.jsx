import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yipja7bqc.css';
import '../../css/n/ncw19pbwv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yipja7bqc"/><path class="ncw19pbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:window"} {...others} />);
}

export default Component;
