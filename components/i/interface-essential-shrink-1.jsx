import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd_60tzip.css';
import '../../css/w/wyf5cbt8m.css';
import '../../css/y/yyz6j7bdx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xd_60tzip"/><path class="wyf5cbt8m"/><path class="yyz6j7bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-shrink-1"} {...others} />);
}

export default Component;
