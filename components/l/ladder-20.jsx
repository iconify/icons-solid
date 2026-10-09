import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo1l9hn0b.css';
import '../../css/i/i9xwo4sma.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uo1l9hn0b"/><path class="i9xwo4sma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladder-20"} {...others} />);
}

export default Component;
