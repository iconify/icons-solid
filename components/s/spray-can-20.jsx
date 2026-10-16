import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb0u2kbzg.css';
import '../../css/t/t-m8w0bde.css';
import '../../css/l/l1ws3p1do.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zb0u2kbzg"/><path class="t-m8w0bde"/><path class="l1ws3p1do"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spray-can-20"} {...others} />);
}

export default Component;
