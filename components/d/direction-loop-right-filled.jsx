import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrvbtsb1t.css';
import '../../css/x/x5brej6ph.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yrvbtsb1t"/><path class="x5brej6ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-loop-right-filled"} {...others} />);
}

export default Component;
