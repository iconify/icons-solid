import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0_aafh7s.css';
import '../../css/o/oasg37s7n.css';
import '../../css/k/kfsga1-1n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h0_aafh7s"/><path class="oasg37s7n"/><path class="kfsga1-1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:copy-link"} {...others} />);
}

export default Component;
