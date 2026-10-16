import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq_kneo0b.css';
import '../../css/i/i-510_b_l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vq_kneo0b"/><path class="i-510_b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spillway-48"} {...others} />);
}

export default Component;
