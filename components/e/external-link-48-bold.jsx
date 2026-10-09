import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkc0ul0xf.css';
import '../../css/j/jgs4mub3w.css';
import '../../css/l/led_7kbkl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jkc0ul0xf"/><path class="jgs4mub3w"/><path class="led_7kbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:external-link-48-bold"} {...others} />);
}

export default Component;
