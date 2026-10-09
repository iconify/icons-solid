import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyfntu4cb.css';
import '../../css/r/ryn9fxb8x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kyfntu4cb"/><path class="ryn9fxb8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-horizontal-20"} {...others} />);
}

export default Component;
