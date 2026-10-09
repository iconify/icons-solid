import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx5i_8glh.css';
import '../../css/u/uyhqdeb9l.css';
import '../../css/u/ua2_qkbcq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sx5i_8glh"/><path class="uyhqdeb9l"/><path class="ua2_qkbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-river-48"} {...others} />);
}

export default Component;
