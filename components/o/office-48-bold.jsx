import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3a2q10ee.css';
import '../../css/i/icrr06bxm.css';
import '../../css/t/tmgko40hf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t3a2q10ee"/><path class="icrr06bxm"/><path class="tmgko40hf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:office-48-bold"} {...others} />);
}

export default Component;
