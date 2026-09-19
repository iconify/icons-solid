import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i84evwbcm.css';
import '../../css/z/zej4k5jhq.css';
import '../../css/q/q9ug-zblj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i84evwbcm"/><path class="zej4k5jhq"/><path class="q9ug-zblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:status-change"} {...others} />);
}

export default Component;
