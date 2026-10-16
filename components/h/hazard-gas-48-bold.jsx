import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2mjsubix.css';
import '../../css/b/bkl1c0rno.css';
import '../../css/k/kp5hxh01s.css';
import '../../css/b/bol9gfbvx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2mjsubix"/><path class="bkl1c0rno"/><path class="kp5hxh01s"/><path class="bol9gfbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-gas-48-bold"} {...others} />);
}

export default Component;
