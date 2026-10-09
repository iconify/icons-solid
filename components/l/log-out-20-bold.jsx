import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkfvnlevf.css';
import '../../css/m/mzr03n29o.css';
import '../../css/m/meohbdg3a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qkfvnlevf"/><path class="mzr03n29o"/><path class="meohbdg3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-out-20-bold"} {...others} />);
}

export default Component;
