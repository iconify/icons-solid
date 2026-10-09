import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kddy26b4i.css';
import '../../css/y/y5y-mrx_b.css';
import '../../css/j/j5c0g3bgm.css';
import '../../css/o/ok2a0zu8m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kddy26b4i"/><path class="y5y-mrx_b"/><path class="j5c0g3bgm"/><path class="ok2a0zu8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floating-wind-48"} {...others} />);
}

export default Component;
