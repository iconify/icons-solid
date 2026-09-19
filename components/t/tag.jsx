import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoyfc1bhb.css';
import '../../css/l/lqbe3zbxt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yoyfc1bhb"/><path class="lqbe3zbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tag"} {...others} />);
}

export default Component;
