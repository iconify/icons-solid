import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyvvt7bhx.css';
import '../../css/c/c952xtech.css';
import '../../css/f/fryt02bfr.css';
import '../../css/g/g0yl3ybfk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pyvvt7bhx"/><path class="c952xtech"/><path class="fryt02bfr"/><path class="g0yl3ybfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cycle-lane-48"} {...others} />);
}

export default Component;
