import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku0ntlbrj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ku0ntlbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickup-truck-with-raised-hood-under-wrench"} {...others} />);
}

export default Component;
