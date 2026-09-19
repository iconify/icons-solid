import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-2wu0c7s.css';
import '../../css/k/ksujj2ycj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y-2wu0c7s"/><path class="ksujj2ycj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:event-incident"} {...others} />);
}

export default Component;
