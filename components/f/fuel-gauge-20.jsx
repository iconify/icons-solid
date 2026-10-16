import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d03rjttsh.css';
import '../../css/x/x4s1haczx.css';
import '../../css/f/fi3lb_64h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d03rjttsh"/><path class="x4s1haczx"/><path class="fi3lb_64h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-gauge-20"} {...others} />);
}

export default Component;
